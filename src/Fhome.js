import {Component} from 'react';
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import './home.css';

const Fhome = (props) =>{

    const [user, setUser] = useState({image:null,rating:null});

    const params = useParams();
    let url="https://api.tvmaze.com/shows/";
    let search_term =params.id;
    let fx = url.concat(search_term);
    
    const fetchData = () => {
        return fetch(fx)
              .then((response) => response.json())
              .then((data) => setUser(data));
      }
    
      useEffect(() => {
        fetchData();
        console.log("from Fhome");
      },[])

    return(
        <div class="fd">
            <div class="pk">

                {user.image?<img src={user.image.medium} alt="unable to load"/>:""};

            </div>
            
            <div class="gh">

                <h3>{user.name}</h3>
                {user.rating?<p><b> Rating: {user.rating.average} </b> </p>:""}
                <p>Release Date: {user.premiered} | Length: {user.runtime} </p>
                <p>Movie Description</p>
                <p>{user.summary}</p>

            </div>
        </div>
        
      
    );

}

export default Fhome
