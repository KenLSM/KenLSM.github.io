const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
      {
        allMdx(
          sort:{ frontmatter: { date: ASC } }, limit: 1000
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
  if (nodes.length > 0) {
    // Define the template for blog post
    nodes.forEach((node, index) => {
      const previousPostId = index === 0 ? null : nodes[index - 1].id
      const nextPostId = index === nodes.length - 1 ? null : nodes[index + 1].id

      createPage({
        path: node.fields.slug,
        // component: `${blogPost}`,
        component: `${blogPost}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
          previousPostId,
          nextPostId,
          slug: node.fields.slug,
        },
      })
    })
  }
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
