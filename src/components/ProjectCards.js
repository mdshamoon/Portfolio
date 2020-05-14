import React from 'react'
import Img from "gatsby-image"


import { StaticQuery, graphql } from "gatsby"

const custom=require('./myCustomFunctions')

export default () => (
  <StaticQuery
    query={graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/"}}
        ) {
        edges {
          node {
            frontmatter {
              type
              title
              description
              tools
              image {
                childImageSharp{
                    sizes(maxWidth: 590) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            }
          }
        }
      }
    }
    `}
    render={data => (
      <header>

          <div className="line-numbers">
            <p>
              { 
              custom.numbers(40)
              }
              </p> </div>

        <div className="divider">
        </div>
       
        {data.projects.edges.map(({ node }) => (
        <div className="project-container">

          <div className="project-leftside">

            <div className="project-text">  
              <p className="project-type">{node.frontmatter.type}</p>
              <p className="project-title">{node.frontmatter.title}</p>
              <p className="project-excerpt">{node.frontmatter.description}</p>
            </div>
            <div className="project-tools">
              <p>{node.frontmatter.tools}</p>
            </div>

          </div>

          <div className="project-image-container">
            <Img className="project-image" sizes={node.frontmatter.image.childImageSharp.sizes} /> 
          </div>

        </div>
      ))}
      </header>
    )}
  />
)