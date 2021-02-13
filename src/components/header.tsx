import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../pages/style.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <div
      style={{
        position: `sticky`,
      }}
    >
      <div className="navbar">
        <Link to="/">
          <img src={data.logo.publicURL} alt="Caesarion Logo" />
        </Link>
      </div>
    </div>
  )
}
export default Header
