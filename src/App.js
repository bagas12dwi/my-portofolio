import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Skill from "./components/Skill";
import About from "./components/About";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header></Header>
      <Home></Home>
      <Nav></Nav>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
