import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export function Navbar() {
  const { user,loginWithPopup,logout,isAuthenticated } = useAuth0();
  return <>
  <h1>NAVBAR</h1>
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
    <button onClick={() => loginWithPopup()}>Log In</button>
    </li>)
    }
    
    
  </div>
  </>;
};


