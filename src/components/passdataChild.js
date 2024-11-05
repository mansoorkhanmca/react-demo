import React , {Component} from 'react';
//import {render} from 'react-dom';

class PassDataChild extends Component{
    
 constructor(){
     super();
     this.tbValue = React.createRef();
     this.state={
         data:null
     }

     
 }   

 sendDataToParent =() =>{

    this.props.sendDataToChild(this.tbValue.current.value);

 }
 
 render(){
     return(
         <div>
            <input type='text' ref={this.tbValue}/><button onClick={this.sendDataToParent}>Send</button>
         </div>
     );
 }
}

export default PassDataChild;