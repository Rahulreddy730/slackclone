import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <h1>Hello This is Rahul Reddy</h1>
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
        <Header />
        <div className="app_body">
        <Sidebar />
      <Switch>
        <Route path="/room/:roomId">
          <Chat />
        </Route>
        <Route path="/">
          <h1>Welcome</h1>
        </Route>
      </Switch>

      </div>
      </>
      )}
      </Router>
    </div>
  );
}

export default App;
