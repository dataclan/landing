import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { Link, useHistory } from "react-router-dom";
import Particles from 'react-particles-js'; 
function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {
    
    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });


  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }


  useEffect(() => {
    checkPath();
  }, []);

  let _home;
  let _team;
  let _contact;

  _home = (<li><Link to="/">Home</Link></li>)
  _team = (<li><Link to="/team">Team</Link></li>)
  _contact = (<li><Link to="/contact">Contact</Link></li>)

  return (
    <div className="App">
     <div className="container">
        <nav>
          <ul>
            <li><Link to="/"> DataClan </Link></li>
          </ul>
          <ul>
            {_home}   &nbsp; 
            {_team}   &nbsp;  
            {_contact}
          </ul>
        </nav>
        <Routes />
     </div>
    </div>
  );
}

export default App;
