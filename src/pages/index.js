import * as React from "react"
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import Form from '../components/Form';

import "@fontsource/lato";
import "@fontsource/oswald";
import "@fontsource/charmonman";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import "@fontsource/montserrat";




const IndexPage = () => {
  return (
    <div>
        <Layout></Layout>
        <Navigation></Navigation>
        <Home></Home>
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Form></Form>
    </div>
  )
}

export default IndexPage
