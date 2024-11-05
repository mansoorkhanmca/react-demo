import React , {Component} from 'react';

class Params extends Component{
    
 constructor(){
     super();
     
     this.state={
         test:''
     }
     
 }   

 render(){
     return(
         <div>
             {this.state.test}
         </div>
     );
 }
}

export default Params;