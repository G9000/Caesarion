import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../pages/style.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper-body">
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/yqo5zxu.css" />
      </Helmet>
      <main className="content">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}
export default Layout
