import About from "./components/About";
import Blogs from "./components/Blogs";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient"></div>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>

          <Route path="/blogs">
            <Blogs/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
