import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    //Link,
    //Outlet,
  } from "react-router-dom";

import Tip from './Tip.js';
import Vid from'./Vid.js';
import Dishes from'./Dishes.js';
import Rezept from'./Rezept.js';



import './App.css';


        

function App() {

  

  return (
    <>
      <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Tip />} />
            <Route path="/vid" element={<Vid />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/rezept/:id" element={<Rezept />} />
  
           
          </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
