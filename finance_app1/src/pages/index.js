import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Finance App</h2>
    <p>This app will use Tensor Flow 2.0 for rapid prototyping.</p>
    <p> The 'dynamic computational graph' advantage of pyTorch is now part of TF 2.0.</p>
    
    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">TensorFlow Serving</Link> <br />
    {/*<Link to="/using-typescript/">Using TypeScript</Link>*/}
  </Layout>
)

export default IndexPage
