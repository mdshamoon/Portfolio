import React from "react"
import picture from "../images/about-picture.jpg"
const custom=require('./myCustomFunctions')

class Bio extends React.Component  {
  render(){
    return(
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
              <p>// Here is my portfolio.
              <br />// This is a comment.
              <br />// This is a comment.
              </p>
          </div>

            <div className="about-main-section">
             
              <div className="about-list">
                <div>
                  <p><span style={{ color: "#FF97FF"}}>.name</span> &#123; </p>
                   

                    <p className="tag-info">Mohd Shamoon</p>
                  <p>&#125;</p>
                </div>
                <div>
                  <p><span style={{ color: "#86FFF8"}}>.bio</span> &#123; </p>
                    <p className="tag-info">I am from Lucknow, a recent graduate from THDC-IHET, Tehri Uttrakhand with Computer Science branch. I love programming, standup comedy and watching dance and anime. Inspired more by fictional characters than real life. </p>
                  <p>&#125;</p>
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
                <img src={picture} /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
