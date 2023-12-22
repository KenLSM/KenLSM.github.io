import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm, scale } from "../utils/typography";

type DataProps = {
  site: {
    siteMetadata?: { title?: string };
  };
  mdx: {
    frontmatter: {
      title: string;
      description: string;
      date: string;
      codeReadTimes: number;
    };
    fields: {
      slug: string;
      timeToRead: { minutes: number };
    };
  };
};

type PageContextProps = {
  previousPost: any;
  nextPost: any;
};
const BlogPostTemplate: React.FC<PageProps<DataProps, PageContextProps>> = ({
  data,
  pageContext,
  location,
  children,
}) => {
  const { site, mdx: post } = data;
  const { previousPost, nextPost } = pageContext;
  const siteTitle = site.siteMetadata?.title || `Title`;

  const { codeReadTimes } = post.frontmatter;
  const totalTimeToRead = Math.ceil(
    codeReadTimes + post.fields.timeToRead.minutes
  );
  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2
            itemProp="headline"
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h2>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
            <span style={{ marginLeft: rhythm(1 / 2), color: "lightgray" }}>
              {totalTimeToRead} min{totalTimeToRead > 1 ? "s" : ""} read
            </span>
          </p>
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
  query BlogPostTemplateQuery($slug: String) {
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
        timeToRead {
          minutes
        }
      }
    }
  }
`;
