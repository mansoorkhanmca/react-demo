import React , {Component} from 'react';
//import {render} from 'react-dom';
import PassDataChild from './passdataChild';

class PassDataParent extends Component{
    
 constructor(){
     super();
     
     this.state={
         data:null
     }

     
 }   

 getDataFromChild =(data) =>{
     this.setState({data})
 }
 
 render(){
     return(
         <div>
            {this.state.data ? <span>{this.state.data}</span> : <span>No Data</span>}
            <PassDataChild sendDataToChild ={this.getDataFromChild}/>
         </div>
     );
 }
}

export default PassDataParent;