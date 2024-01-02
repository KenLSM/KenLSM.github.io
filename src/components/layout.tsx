import { Link } from 'gatsby';
import * as React from 'react';

import { Color } from '../utils/color';
import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }): React.JSX.Element => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const isMePath = location.pathname === '/me/';

  return (
    <div
      className="global-wrapper"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      data-is-root-path={isRootPath}
    >
      <header className="global-header">
        <div
          style={{
            fontFamily: `Montserrat, sans-serif`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
          }}
        >
          <h3
            style={{
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>

          <h5 style={{ margin: 0, marginLeft: '1rem' }}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                paddingLeft: rhythm(1 / 2),
                paddingRight: rhythm(1 / 2),
                paddingBottom: rhythm(1 / 4),
                borderBottom: isMePath
                  ? `${Color.Highlight} 1px solid`
                  : 'none',
              }}
              to={`/me`}
            >
              About
            </Link>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                marginLeft: rhythm(1),
                paddingLeft: rhythm(1 / 2),
                paddingRight: rhythm(1 / 2),
                paddingBottom: rhythm(1 / 4),
                borderBottom: !isMePath
                  ? `${Color.Highlight} 1px solid`
                  : 'none',
              }}
              to={`/`}
            >
              Blog
            </Link>
          </h5>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        Him on <a href="https://twitter.com/kenleesm">X</a>
        {` | `}
        <a href="http://github.com/kenlsm">Github</a>
        {` | `}
        <a href="https://www.linkedin.com/in/kenlsm/">LinkedIn</a>
      </footer>
    </div>
  );
};

export default Layout;
