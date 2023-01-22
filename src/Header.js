import {Component} from 'react';
import './home.css';
import React, { useEffect, useState } from "react";
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Search from './Search.js';
import Desire from './Desire.js';
import Fhome from './Fhome.js';


const Header = (props) =>{

    const [key, setKey] = useState('');
        
    let path="/desire/";
    const search=(event)=>{
        event.preventDefault();
        setKey(event.target.value);
    
    }
    path = path.concat(key);



    return(
        <Router>
        <div>
            <div class="ha">
                <Link to="/search"><h1>TV MAZE</h1></Link>
            </div> 
            <div class="al">
              <form>
              <label for="lname">Search : </label>
                <input type="text" id="lname" text-align="center" placeholder="Search.."  onChange={search} />
                <Link to={path}> search</Link>
                </form>
                
                </div>
                <div>
                <hr></hr>
                </div>
            </div>
            <Routes>
          <Route exact path="/" element={<Search/>}>
          </Route>

          <Route exact path="/search" element={<Search/>}>
          </Route>

          <Route path="/desire/:key" element={<Desire/>}>
          </Route>

          <Route path="desire/:key/fhome/:id" element={<Fhome/>}>
          </Route>

          <Route path="search/fhome/:id" element={<Fhome/>}>
          </Route>
        
          
        </Routes>

            </Router>
    );
}

export default Header
