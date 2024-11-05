import React , {Component} from 'react';
//import {render} from 'react-dom';
import ArrayList from './arrayList';
import DataBinding from './dataBinding';
import LifeCycle from './lifeCycle';
import Fetch from './fetchApi';
import PassDataParent from './passDataParent';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';//npm install --save react-router-dom
class Body extends Component{
    
 constructor(){
     super();
     this.tbRef = React.createRef();
     this.state={
        toglval : true,
         name:'Main Body',
         sub:'Secondary Header',
         selectVal:0
    }
     this.toggle = this.toggle.bind(this);
 }   
 toggle = function toggle(){
     let toglval = !this.state.toglval;
     this.setState({toglval})
     
 }
 switchSelect = function switchSelect(){
     
     this.setState({selectVal:this.tbRef.current.value})
 }
 render(){
     return(
         <div onClick={this.props.onClick}>
             
             {this.state.toglval ? <h1>{this.state.name}</h1> : <h1>{this.state.sub}</h1>}
             
             <br/><br/><br/><br/>
             {/* <button onClick={this.toggle}>Toggle Header</button> */}
             
        <BrowserRouter>
            <NavLink exact activeclass="active" to={'/'} className={this.props.className}>Home</NavLink>
            <NavLink exact activeclass="active" to={'/array-list'} className={this.props.className}>Array List</NavLink>
            <NavLink exact activeclass="active" to={'/two-way-binding'} className={this.props.className}>Two Way Binding</NavLink>
            <NavLink exact activeclass="active" to={'/lifecycle'} className={this.props.className}>Life Cycle</NavLink>
            <NavLink exact activeclass="active" to={'/fetch'} className={this.props.className}>Fetch</NavLink>
            <NavLink exact activeclass="active" to={'/passdata'} className={this.props.className}>Pass Data</NavLink>
            <br/><br/><br/><br/>
            <Switch>
                <Route exact path="/array-list" component={ArrayList}/>
                <Route exact path="/two-way-binding" component={DataBinding}/>
                <Route exact path="/lifecycle" component={LifeCycle}/>
                <Route exact path="/fetch" component={Fetch}/>
                <Route exact path="/passdata" component={PassDataParent}/>
                
            </Switch>
        </BrowserRouter>

            
         </div>
     );
 }
}

export default Body;