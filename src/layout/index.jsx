import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Nav from "../components/Nav";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
    
      <>
          <Nav />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="pl" />
        </Helmet>
      
       <main>{children}</main>
      </>
    );
  }
}
