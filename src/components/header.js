
import React from "react"
import InstagramSVG from "../Icons/InstagramSVG"
import LinkedInSVG from "../Icons/LinkedInSVG"
import MailSVG from "../Icons/MailSVG"
import GithubSVG from "../Icons/GithubSVG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars  } from '@fortawesome/free-solid-svg-icons'




const Header = ({ siteTitle }) => {
  
  
  return (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  
    <div className="header-container">
     
      <div className="user-info-container">
        <div className="user-info">
        
        
          <p> {siteTitle}</p>
          
        </div>
        <div className="x-icon">
          <FontAwesomeIcon icon={ faTimes } style={{ color: '#C4C4C4', fontSize:'20px', fontWeight:'0px', display:'inline-block'}}/>  
        </div>
      </div>
      
      
      
      <div className="icons-container">
            <a href="mailto:someone@yoursite.com">
              <MailSVG />
            </a>

            <a href="https://www.instagram.com/mohd_shamoon/">
              <InstagramSVG />
            </a>

            <a href="https://www.linkedin.com/in/mohd-shamoon-4aa7a513b/">
              <LinkedInSVG />
            </a>

            <a href="https://github.com/mdshamoon">
              <GithubSVG />
            </a>
      </div>
    </div>
   
  // </header>
)
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
