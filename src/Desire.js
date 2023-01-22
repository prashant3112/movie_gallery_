import React, { useEffect, useState } from "react";
import Genre from './Genre.js';
import Header from './Header.js';
import {useParams} from "react-router-dom";


const Search = (props) =>{
  const [user, setUser] = useState([]);

  const params = useParams();

  let url="http://api.tvmaze.com/search/shows?q=";
  let search_term =params.key;
  let fx = url.concat(search_term);


  const fetchData = async () => {
 
    return await fetch(fx)
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[params])

  let genl = new Set();

  user.forEach(da=> {
    genl.add(da.show.genres[0]);
    genl.add(da.show.genres[1]);
    genl.add(da.show.genres[2]);
    
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