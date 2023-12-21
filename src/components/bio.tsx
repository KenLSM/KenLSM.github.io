/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography";
const Bio = ({ short }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.*/" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
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

  const { author, social } = data.site.siteMetadata;
  console.log({ author, social });
  const image = getImage(data.avatar.childImageSharp);
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      {/* {image && (
        <GatsbyImage
          image={image}
          alt={author}
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
      )} */}
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
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  );
};

export default Bio;
