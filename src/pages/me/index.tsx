import { PageProps, graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import AboutMe from './components/AboutMe';
import HeroBanner from './components/HeroBanner';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

// const
const Me: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Me" />
      <HeroBanner />
      <AboutMe />
    </Layout>
  );
};

export default Me;

export const pageQuery = graphql`
  query MeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
