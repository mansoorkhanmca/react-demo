import React , {Component} from 'react';
//import {render} from 'react-dom';

class ArrayList extends Component{
    
 constructor(){
     super();
     
     this.state={
         user:[{name:'Arun',age:20},{name:'Babu',age:21},{name:'Chitu',age:22}]
     }

     
 }   

 gotohome =() =>{
     this.props.history.push('/');

 }
 
 render(){
     return(
         <div>
             {(this.state.user || []).map((item,i)=>{
                   return(
                   <div key = {i}>{item.name}</div>
                   )
            })}
             <button onClick={this.gotohome}>Go to Home</button>
         </div>
     );
 }
}

export default ArrayList;