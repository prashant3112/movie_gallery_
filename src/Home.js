import {Component} from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = (props) =>{
  let id = props.id;
  let path = 'fhome/';
  path = path.concat(id);
    

    return(
      <div class="try">
         <div id="fpic">
         <Link to={path}><img src={props.image} alt="unable to load"/></Link>
        </div>
      </div>
      
    );

}

export default Home
