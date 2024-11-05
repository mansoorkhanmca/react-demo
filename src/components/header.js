import React, {Component} from 'react';
//import {Render} from 'react-dom';



const Header3 = (props)=>{
    return(
        <div onClick={props.onClick}>
            <h2> {props.name}!!!</h2>
        </div>
    ) 
    }


export default Header3;
