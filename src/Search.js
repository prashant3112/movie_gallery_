import React, { useEffect, useState } from "react";
import Genre from './Genre.js';
import Header from './Header.js';


const Search = (props) =>{
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://api.tvmaze.com/shows")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  let genl = new Set();

  user.forEach(da=> {
    genl.add(da.genres[0]);
    genl.add(da.genres[1]);
    genl.add(da.genres[2]);
  });

  let ar = [...genl];
 
  return (
    <div>      
    {
       ar.map((userObj, index) =>{
       
          return(
          <div key={index} class="hed" >
            
          <h1>{userObj}</h1>
          
          <Genre user={user} curGenre={userObj}/>

         
         
         </div>
       )
        
       }
      )
     }
    </div>
    );
}
export default Search;