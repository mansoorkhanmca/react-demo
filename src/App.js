import React, {Component} from 'react';
//import {Render} from 'react-dom';
//import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Header3 from './components/header';
import Body from './components/body'

let hdrinner = false;
const footer = (test)=>{
  return(
      <div>
          <h2> {test}!!!</h2>
      </div>
  ) 
  }

  const clicked=()=>{
    alert('Clicked');
  }

  const toggled=()=>{
    console.log('Toggled!!!');
    
    
  }

  
  const Header2 = (props1)=>{
    
    return(
        <div >
            <h2 onClick={props1.onClick}>{props1.name}!!!</h2>
            
            
            

        </div>
    ) 
    
    }
const App=()=> {
 
  
  return (
    <div className="App">
      

      {hdrinner ? <Header2 name={' Stateless Header Comp from inner!!!'} onClick={clicked}/> : <Header3 name={'Stateless Header Comp from outter!!!'} onClick={clicked}/>}
      
      <Body onClick={toggled} className={'pdng'}/>

      {footer('My Footer')}
    </div>
  );
}

export default App;
