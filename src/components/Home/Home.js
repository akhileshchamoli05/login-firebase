import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/login');
  }
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
        <br />
        <h1>
          <Link to="/completeprofile">Complete Profile</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      <div>
          <button onClick={handleClick}>Log Out</button>
        </div>
    </div>
  );
}

export default Home;
