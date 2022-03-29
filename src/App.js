import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from "./components/card/Card";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Card />
    </>
  );
}

export default App;