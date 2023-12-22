import path from "path"
import { createFilePath } from "gatsby-source-filesystem"

const getPreviousPostsWithPredicate = <T>(nodes: T[], funcPredicate: (f: T) => boolean, beginIdx: number): T | null => {
  for (let i = beginIdx; i < nodes.length; i++) {
    if (funcPredicate(nodes[i])) {
      return nodes[i];
    }
  }
  return null;
};

const getNextPostsWithPredicate = <T>(nodes: T[], funcPredicate: (f: T) => boolean, beginIdx: number): T | null => {
  for (let i = beginIdx; i >= 0; i--) {
    if (funcPredicate(nodes[i])) {
      return nodes[i];
    }
  }
  return null;
};

type NodeType = {
  id: string,
  fields: { slug: string },
  frontmatter: {
    title: string,
    draft?: boolean
  }
  internal: { contentFilePath: string }
}

type allMdxDataProps = {
  allMdx: {
    nodes: NodeType[]
  }
}
type graphqlType<T> = {
  errors: any,
  data: T
}
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result: graphqlType<allMdxDataProps> = await graphql(`
      {
        allMdx(
          sort:{ frontmatter: { date: DESC } }, limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title 
              draft
            }     
            internal {
              contentFilePath
            }
          }
        } 
      }
    `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const { nodes } = result.data.allMdx


  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  // Define the template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  nodes.forEach((node, index) => {
    const previousPostId = index === 0 ? null : nodes[index - 1].id
    const nextPostId = index === nodes.length - 1 ? null : nodes[index + 1].id

    const previous =
      index === nodes.length - 1
        ? null
        : getPreviousPostsWithPredicate<typeof node>(
          nodes,
          (f) => !Boolean(f.frontmatter.draft),
          index + 1
        );
    const next =
      index === 0
        ? null
        : getNextPostsWithPredicate(
          nodes,
          (f) => !Boolean(f.frontmatter.draft),
          index - 1
        );
    createPage({
      path: node.fields.slug,
      component: `${blogPost}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        previousPostId,
        nextPostId,
        slug: node.fields.slug,
        previousPost: previous,
        nextPost: next
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
      type SiteSiteMetadata {
        author: Author
        siteUrl: String
        social: Social
      }
  
      type Author {
        name: String
        summary: String
      }
  
      type Social {
        twitter: String
      }
  
  
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
  
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
      }
  
      type Fields {
        slug: String
      }
    `)
}
