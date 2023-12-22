/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography";
const profilePicSrc = "../images/profile-pic.png";

type BioProps = {
  short?: boolean;
};
const Bio = ({ short }: BioProps) => {
  const { site } = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <StaticImage
        src={profilePicSrc}
        alt={author.name}
        placeholder="blurred"
        layout="fixed"
        width={100}
        style={{
          flexShrink: 0,
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: rhythm(5 / 2),
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <p style={{ marginBottom: 0 }}>
          I'm{" "}
          <a href={`https://twitter.com/${social.twitter}`}>{author.name}</a> 🇸🇬
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
