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
      <div className="page-wrapper">

        <div className="line-numbers">
          <p>
            {
              custom.numbers(40)
            }
          </p>
        </div>
        <div className="divider">
        </div>

        <div className="about-content-container">

          <div className="comments">
              <p># Here is my projects.
              <br /># This is a comment.
              <br /># This is a comment.
              </p>
          </div>

            <div className="about-main-section">
             
              <div className="about-list">
                <div>
                  <p><span style={{ color: "#3a5cb1"}}>{'<?php'}</span> </p>
                   

                    <p className="tag-info">echo "My Projects"</p>
                  
                </div>
                <div>
                  <p><span style={{ color: "#86FFF8"}}>foreach($Projects as $project)</span> &#123; </p>
                    <p className="tag-info">$project->name
                      </p>
                </div>
                <div>
                  <p><span style={{ color: "#94D381"}}>.skills</span> &#123; </p>
                    <p className="tag-info">Web: HTML;
                    <br />Web: CSS;
                    <br />Web: Javascript;
                    <br />Framework: React;
                    <br />Framework: Laravel;
                    <br />Cloud Platform: AWS;</p>
                  <p>&#125;</p>
                </div>
              </div>

              <div className="about-image-container">
                <img src="" /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )}
  />
)