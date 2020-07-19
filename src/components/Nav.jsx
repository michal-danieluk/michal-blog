import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div>
          <Link to="/" className="brand">
            <span className="emoji">⛰️</span> Michal's Lair
          </Link>
        </div>
        <div>
          <li className="navli">
            <Link to="/me">Autor</Link>
          </li>
          <li className="navli">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navli">
            <Link to="/guides">Guides</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
