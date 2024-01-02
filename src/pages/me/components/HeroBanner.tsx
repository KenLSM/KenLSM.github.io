import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { Color } from '../../../utils/color';

const HeroBanner = () => (
  <div
    style={{
      minHeight: '60vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    <div
      style={{
        flex: 1,
        alignSelf: 'center',
        borderLeftColor: Color.Highlight,
        borderLeftWidth: '0.25rem',
        borderLeftStyle: 'solid',
        paddingLeft: '2rem',
        marginRight: '2rem',
        minWidth: '22.5rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Merriweather',
          fontWeight: 'normal',
          marginBottom: '0.5rem',
          color: Color.Primary,
        }}
      >
        Hi there!
      </span>
      <h2
        style={{
          marginTop: '0.25rem',
          color: Color.Highlight,
          fontWeight: 'normal',
        }}
      >
        I'm <span style={{ fontWeight: 'bold' }}>Ken Lee</span>
      </h2>
      <span>
        I write <strong>code</strong> and <strong>solve problems</strong> in the
        internet industry, and sometimes speak about things on the{' '}
        <strong>
          <a
            href="https://engineers.sg/presenter/ken-lee--1229"
            target="_blank"
          >
            interweb
          </a>
        </strong>
        .
      </span>
    </div>
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          height: '200px',
          width: '200px',
          position: 'relative',
          background: Color.Secondary,
        }}
      >
        <div
          style={{
            border: `0.1rem ${Color.Highlight} solid`,
            height: '200px',
            width: '200px',
            position: 'absolute',
            left: '-2rem',
            top: '-2rem',
          }}
        />
        <div
          style={{
            height: '200px',
            width: '200px',
            position: 'absolute',
            left: '2rem',
            top: '2rem',
            background: Color.Highlight,
          }}
        />
        <div
          style={{
            border: `0.1rem ${Color.Highlight} solid`,
            height: '200px',
            width: '200px',
            position: 'absolute',
            left: '0',
            top: '0',
            background: Color.Primary,
          }}
        >
          <StaticImage
            style={
              {
                // background: Color.Highlight,
                // color: Color.Highlight,
              }
            }
            src={'../assets/img/profile-nobg.png'}
            alt={'handsome'}
            height={200}
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroBanner;
