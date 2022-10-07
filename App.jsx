import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/";
import Header from "./Components/Header/";
import About from "./Pages/About/About";

import CatigorePage from "./Pages/CatigorePage";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Recepe from "./Pages/Recepe/Recepe";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/abaut" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/category/:name" element = {<CatigorePage/>}/>
      <Route path="/recepe/:id" element = {<Recepe/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
};

export default App;
