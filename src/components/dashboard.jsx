
import Loading from "../components/Loading";
import {  withAuthenticationRequired } from "@auth0/auth0-react";


function Dashboard() {

  return (
    <div>
      <h1>DASHBOARD</h1>
    </div>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});