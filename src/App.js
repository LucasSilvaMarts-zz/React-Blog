import Home from "./Pages/Home/Home";
import Topbar from "./components/Topbar/Topbar.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Write from "./Pages/Write/Write.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import Single from "./Pages/Single/Single";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
