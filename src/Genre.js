import {Component} from 'react';
import './home.css';
import Home from './Home.js';
const Genre = (props) =>{
    let curGenre=props.curGenre;
    
    
    return(
      <div class="arr">
      {


         props.user.map((userObj, index) =>         
              {
                
                if(userObj.show)
                {
                  userObj=userObj.show;
                }
               
                if(userObj.image&& (curGenre===userObj.genres[0] || curGenre===userObj.genres[1]|| curGenre===userObj.genres[2]))
                {
                  return (<div key={index} class="up">

                  
                  <Home image={userObj.image?userObj.image.medium :"" } id ={userObj.id?userObj.id :"" } />
                  </div>)
              
              
                }
              }
        )
      }

      </div>
    );
};

export default Genre
