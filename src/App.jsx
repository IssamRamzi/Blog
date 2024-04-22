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
        <Router index path="/">
          <About />
        </Router>

        <Router path="/blogs">
          <Blogs/>
        </Router>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
