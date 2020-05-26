const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const getPreviousPostsWithPrecate = (posts, funcPredicate, beginIdx) => {
  for (let i = beginIdx; i < posts.length; i++) {
    if (funcPredicate(posts[i])) {
      return posts[i];
    }
  }
};

const getNextPostsWithPrecate = (posts, funcPredicate, beginIdx) => {
  for (let i = beginIdx; i > 0; i--) {
    if (funcPredicate(posts[i])) {
      return posts[i];
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                draft
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous =
      index === posts.length - 1
        ? null
        : getPreviousPostsWithPrecate(
            posts,
            f => f.node.frontmatter.draft === false,
            index + 1
          )?.node;
    const next =
      index === 0
        ? null
        : getNextPostsWithPrecate(
            posts,
            f => f.node.frontmatter.draft === false,
            index - 1
          )?.node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
