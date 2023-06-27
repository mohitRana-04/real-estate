import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";




export const  Profile = () => {
    const { user } = useAuth0();
    return(
        <div> 
          <h1>PROFILE</h1>
        <img src={user.picture} alt={user.name} />
      </div>)
 };


 export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
  });