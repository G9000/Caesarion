import React from "react"
import { Link } from "gatsby"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import { BsArrowUpRight } from "react-icons/bs"
import SEO from "../components/seo"
import "./style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="main-heading">
          Bespoke full-stack web development and design studio.
        </h1>
        <h3 className="main-subheading">
          Disrupting existing process to cultivate the future of digital
          landmark.
        </h3>

        <a href="mailto:leo.caesar@live.com">
          <button className="cta-button">
            Contact us <BsArrowUpRight />
          </button>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
