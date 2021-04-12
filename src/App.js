import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import FriendsPage from "./Pages/FriendsPage";
import FileManager from "./Pages/FileManager";
import TeamPage from "./Pages/TeamPage";
import Teams from "./Pages/Teams";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/friends">
            <FriendsPage />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          login
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/filemanager">
            <FileManager />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
