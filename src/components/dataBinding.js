import React , {Component} from 'react';
//import ReactDOM from 'react-dom';

class DataBinding extends Component{
    
 constructor(){
     super();
     this.myRef = React.createRef();
     this.state={
        typedValue:'Hi!'
     } 
 }  
 
 changeVal = (event) =>{
    console.log(event.target.value);
    this.setState({typedValue:event.target.value})
 }

 resetVal =()=>{
    console.log(this.myRef.current.value);
    this.setState({typedValue:''})
    this.myRef.current.focus();
   
 }
 
 render(){
     return(
         <>
         <br/>
            <input type='text' ref={this.myRef} value={this.state.typedValue} onChange={this.changeVal}/><br/> 
                <div>{this.state.typedValue}</div> <br/>
                <button onClick={this.resetVal}>Reset</button>
             
         </>
     );
 }
}

export default DataBinding;