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
        internet industry.
      </span>
    </div>
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          border: `0.1rem ${Color.Primary} solid`,
          height: '300px',
          width: '300px',
          position: 'relative',
          bottom: '-1rem',
          right: '-1rem',
          background: Color.Highlight,
        }}
      >
        <StaticImage
          style={{ position: 'relative', left: '-2rem', top: '-2rem' }}
          src={'../assets/img/profile-pic.jpg'}
          alt={'handsome'}
          height={300}
        />
      </div>
    </div>
  </div>
);

export default HeroBanner;
