import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from "./src/component/Services";
import Project from "./src/component/Projects";
import Contact from "./src/component/Contact";
import About from "./src/component/About";
import Navbar from "./src/component/Navbar";
// import SideNavBar from "./src/component/SideNavBar";
// import { useState } from "react";

// import App from "./App.jsx"

function App() {
  // const [menu, setMenu] = useState()
  // const handleClick = () =>{
  //   setMenu(document.getElementById("menu-btn").value);
  //   setMenu(document.getElementById("menu").value);
  // }
    return (
      <BrowserRouter>
        {/* <button onClick={ handleClick } /> */}
        <header>
            <Navbar />
            {/* <SideNavBar /> */}
            <About />
            <Services />
            <Contact />
        </header>
        <Routes>
          <Route path="/src/component/About.jsx" element={<About />} />
          <Route path="/src/component/About.jsx" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="#/src/component/Contact.jsx" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);



/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// )