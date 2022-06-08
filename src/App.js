import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
//import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import "./components/FontawesomeIcons";
import Projects from "./components/Pages/Projects/Projects";
import Slide from "./components/Pages/Slide";
import Email from "./components/Pages/Email";
import Walls from "./components/Pages/jobgroups/rockWalls"
import Paths from "./components/Pages/jobgroups/stonePaths"
import Chimneys from "./components/Pages/jobgroups/stonePaths"
import Floors from "./components/Pages/jobgroups/stonePaths"
import Mailbox from "./components/Pages/jobgroups/stonePaths"
import Poolsides from "./components/Pages/jobgroups/RockPoolSides"

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path = "/" element = { <Home /> } />
          <Route exact path = "/Projects" element = { <Projects /> } />
          <Route exact path = "/Slide" element = { <Slide /> } />
          <Route exact path = "/Email" element = { <Email /> } />
          <Route exact path = "/Walls" element = { <Walls /> } />
          <Route exact path = "/Paths" element = { <Paths /> } />
          <Route exact path = "/Chimneys" element = { <Chimneys /> } />
          <Route exact path = "/Floors" element = { <Floors /> } />
          <Route exact path = "/Mailbox" element = { <Mailbox /> } />
          <Route exact path = "/Poolsides" element = { <Poolsides /> } />
        </Routes>
        {/* <Footer /> */}
      </React.Fragment>
    );
}

export default App;