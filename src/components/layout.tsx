import * as React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";

const Layout = ({ location, title, children }): React.JSX.Element => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
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
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
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
    );
  }

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
      <header className="global-header">{header}</header>
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
