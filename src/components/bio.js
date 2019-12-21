/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const Bio = ({ short }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.*/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          flexShrink: 0,
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: rhythm(5 / 2),
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <div>
        <p style={{ marginBottom: 0 }}>
          I'm <a href={`https://twitter.com/${social.twitter}`}>{author}</a> 🇸🇬
        </p>
        <p>
          {short
            ? `Thinking and trying to build useful things.`
            : `Penning down thoughts, and ideas to share. During my commute, my
          brain digests through many thoughts of others. And through them, I pen
          down thoughts and ideas of yestermorning.`}
        </p>
      </div>
    </div>
  );
};

export default Bio;
