import React, { Component } from "react"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import AboutPage from "../components/AboutPage"


class About extends Component {
  constructor() {
    super();
    this.state = {
      navToggle: false
    }
  }
  
  componentDidMount() {
    if(window.screen.availWidth < 800) {
      this.setState({ navToggle: true })
    }
    else {
      this.setState({ navToggle: false })
    }
  }
  
  render() {
    
    
    return (
      <div className="about-page-container">
         <div className="about-page">
            <SEO title="Home" />
            <Nav />
            <AboutPage />
          </div>
        
      </div>
    )
  }
}


export default About;