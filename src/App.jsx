import "./components/Styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Dashboard from "./components/dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { HeroText } from "./components/hero";
import Loading from "./components/Loading";
import { Profile } from "./components/profile";
import AllPost from "./components/AllPost";
import Mapp from "./components/Mapp"

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          component={isAuthenticated ? Dashboard : HeroText}
        />
        <Route path="/post" component={AllPost} />
        <Route path="/explore" component={Mapp} />

        <Route
          path="*"
          component={() => {
            return <div>404, PAGE NOT FOUND</div>;
          }}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;