import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({ data, pageContext, location, children }) => {
  const { site, mdx: post } = data;
  const { previousPost, nextPost } = pageContext;
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        {children}
        <hr />
        <footer>
          <Bio short />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previousPost && (
              <Link to={previousPost.fields.slug} rel="prev">
                ← {previousPost.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {nextPost && (
              <Link to={nextPost.fields.slug} rel="next">
                {nextPost.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const Head = ({ data: { mdx: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        codeReadTimes
      }
      fields {
        slug
      }
    }
  }
`;
