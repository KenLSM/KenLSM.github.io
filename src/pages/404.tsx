import * as React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
