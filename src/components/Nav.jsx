/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div>
          <Link to="/" className="brand">
            Michal.Danieluk </Link>
        </div>
        <div>
          <li className="navli">
            <Link to="/me" className="navli">
              Autor
            </Link>
          </li>
          <li className="navli">
            <Link to="/blog" className="navli">
              Blog
            </Link>
          </li>
          <li className="navli">
            <Link to="/guides" className="navli">
              Guides
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
