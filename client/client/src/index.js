import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./App.js";
//import App from "./App";
//import Appr from './Appr.js';

import {createStore} from "redux"

const defaultState = {
      tip: [''],
      vid: ['']

}



function reduser (state=defaultState, action) {
    //console.log('1', state)
    switch (action.type) {
      case 'VID':
        return {
          ...state,
          //vid: [...state.vid, action.payload]
          vid:  action.payload
        }
      case 'TIP':
        return {
          ...state,
          //tip: [...state.tip, action.payload]
          tip:  action.payload
        }
      //break
      default:
        return state
    }
    

}

const store= createStore(reduser)

//console.log('store', store)
//console.log("2", store.getState())

// store.subscribe (()=> {
//   console.log('suscribe', store.getState())
//   const items = document.querySelector(".testUl")

//   items.innerHTML=''
//   document.querySelector('.testInput').value=''

//   store.getState().map(item => { 
//    const li =document.createElement("li")
//   li.textContent = item
//   items.appendChild (li) 
//   })
  
// })

// store.dispatch({
//   type:'WRITE',
//   payload:'123'

//   })

//  console.log("3", store.getState())

// const testButton = document.querySelector(".testButton")
// testButton.addEventListener( 'click', () =>{
//   const inputValue = document.querySelector(".testInput").value
//   //console.log('input', inputValue)
//   store.dispatch({
//     type:'WRITE',
//     payload: inputValue
  
//   })

// })

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider >,document.getElementById( "root")
         
);
        
