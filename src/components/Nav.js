import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faFolder, faCross, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFile, faArrowAltCircleLeft,faHandPointLeft } from '@fortawesome/free-regular-svg-icons'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component  {
  constructor() {
    super();
    this.state = {
      portfolio_active: true,
      about_active: false,
      index_classname:"uncliked-file",
      about_classname: "unclicked-file",
      portfolio_classname: "clicked-file",
      contact_classname: "unclicked-file",

    }
  }
  
  componentDidMount() {

    

    document.getElementById('nav-button').onclick=(obj)=>{
      let button= document.getElementsByClassName('navbar-container')[0];
      let insideList=document.getElementsByClassName('navbar-list')[0];
     
      if(insideList.style.display=="none")
      {

        document.getElementById('bar-button').classList.add('rotate');
        document.getElementById('bar-button').classList.toggle('icon-hover','icon-default');
        document.getElementById('cross-button').classList.remove('icon-hover');
        document.getElementById('cross-button').classList.add('icon-default');

        
        
      
     
        button.classList.remove("translate-navbar-left")
        button.classList.add("translate-navbar-right")

        setTimeout(function(){
          insideList.style.display="inline-block"
          },400)
  
      }

      else{
        document.getElementById('cross-button').classList.add('rotate');
        document.getElementById('cross-button').classList.toggle('icon-hover','icon-default');
        document.getElementById('bar-button').classList.remove('icon-hover');
        document.getElementById('bar-button').classList.add('icon-default');

        
      insideList.style.display="none";
      
      button.classList.remove("translate-navbar-right")
      button.classList.add("translate-navbar-left")
      setTimeout(function(){
        insideList.style.display="none"
        },600)

    }

      
      
      
      
       
     
      
     }
     if(window.matchMedia("(max-width: 800px)").matches)
     document.getElementById('nav-button').click();

    
     

    
    if(window.location.href.includes("portfolio")) {
      this.setState({ 
        portfolio_active: true,
        about_active: false,
        index_classname:"unclicked-file",
        about_classname: "unclicked-file",
        portfolio_classname: "clicked-file",
        contact_classname: "unclicked-file",
      })
    }
    else if(window.location.href.includes("about")) {
      this.setState({ 
        portfolio_active: false,
        about_active: true,
        index_classname:"unclicked-file",
        about_classname: "clicked-file",
        portfolio_classname: "unclicked-file",
        contact_classname: "unclicked-file",
      })
    }
  }
  
  render() {

 
    const { index_classname, portfolio_classname, about_classname, contact_classname } = this.state; 
    return(
      <div className="navbar-container">
         <a href="#" id="nav-button"> <FontAwesomeIcon width="0" icon={ faArrowAltCircleLeft } style={{ color: '#C4C4C4', fontSize:'25px'}} id="cross-button" className=" icon icon-default" />
         <FontAwesomeIcon width="0" icon={ faBars } style={{ color: '#C4C4C4', fontSize:'25px'}} className="icon icon-hover" id="bar-button" />
         </a>
        <div className="navbar-list">

        <div className="folder-name-container">
            <FontAwesomeIcon width="0" icon={ faAngleDown } style={{ color: '#C4C4C4', fontSize:'25px'}}/> &nbsp;&nbsp;
            <FontAwesomeIcon width="0" icon={ faFolder } style={{ color: '#536579', fontSize:'30px'}}/> &nbsp;
            <p>Shamoon's Portfolio</p>
        </div>

        <div className="navbar-pages-container">
            <div className="navbar-pages">
                <FontAwesomeIcon width="0" icon={ faFile } className={index_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/"><p>index.html</p></Link>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon width="0" icon={ faFile } className={about_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/about"><p>about.css</p></Link>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon width="0" icon={ faFile } className={portfolio_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/portfolio"><p>projects.html</p></Link>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon width="0" icon={ faFile } className={contact_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/"><p>contact.html</p></Link>
            </div>
        
        </div>
        </div>
      </div>
    );
  }
}


export default Nav;

