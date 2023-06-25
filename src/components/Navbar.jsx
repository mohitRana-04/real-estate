import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const { user,loginWithRedirect,logout,isAuthenticated } = useAuth0();
  return <>
  <div className="list">
      {
        isAuthenticated && 
        <li><p className="para">Welcome , {user.name}</p></li>
      }
    
    {
      isAuthenticated ? (<li>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
        </li>) : (<li>
    <button onClick={() => loginWithRedirect()}>Log In</button>
    </li>)
    }
    
    
  </div>
  </>;
};

export default Navbar;
