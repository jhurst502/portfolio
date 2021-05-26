import * as React from "react"
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Navigation from "../components/Navigation";

import "@fontsource/lato";
import "@fontsource/oswald";
import "@fontsource/charmonman";


const IndexPage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  )
}

export default IndexPage
