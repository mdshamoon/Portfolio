import React , { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist'
import Delay from 'react-delay'
import { Link } from "gatsby"


class Terminal extends Component {
  
  // componentDidMount() {
  //   if(window.location.href === "http://localhost:8000/") {
  //     setTimeout(() => {
  //       window.location.href = '/about';
  //     }, 28000);
  //   }
  // }

 componentDidMount() {
      setTimeout(() => {
        window.location.replace(`/about`)
      }, 10000);
    }
  

  
  render() {
    const { command1, command2, name, description } = this.props.data;
    
    var description_list = [];
    var sentence = "";
    for(var i = 0; i < description.length; i++) {
      if(description[i] === '>' || i === description.length-1) {
        description_list.push(sentence.trim());
        sentence = "";
      }
      else {
        sentence += description[i];
      }
    }
    
    return (
      <div className="terminal-container">
        <nav className="terminal-nav">
          <div className="circles-container">
            <div className="circle red" style={{ backgroundColor: "#ED3131"}}></div>
            <div className="circle yellow" style={{ backgroundColor: "#EDCF31"}}></div>
            <div className="circle green" style={{ backgroundColor: "#4CED31"}}></div>
          </div>
          <div className="terminal-title">bash</div>
        </nav>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist 
            cursor={{ hideWhenDone: true }}
            avgTypingDelay={25}
          >
            {command1}
          </Typist>
        </div>
        
        <Delay wait={1000}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={25}
            >
              {command2}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={2000}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={25}
            >
              Hi I'm {name}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={3500}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={25}
            >
              {description_list[0]}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={5000}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={25}
            >
              {description_list[1]}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={6500}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={40}
            >
              {description_list[2]}
            </Typist>
          </div>
        </Delay>
        
        <Delay wait={7500}>
          <div className="row">
            <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
            Sign In (Yes / No): &nbsp;
            <Typist 
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={40}
            >
              <Typist.Delay ms={500} />
              Yes
            </Typist>
          </div>
        </Delay>
      </div>
    )
  }
}


const TerminalFunc = ({ data }) => {
  return (
    <div>
      <Terminal data={data.edges[0].node.frontmatter} />
    </div>
  );
}

export default TerminalFunc; 