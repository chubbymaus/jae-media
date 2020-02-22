import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Jumbotron from "../components/Home/Jumbotron"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
  </Layout>
)

export default IndexPage
