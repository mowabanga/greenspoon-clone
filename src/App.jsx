import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
import Producers from "./components/Producers";
import './App.css';
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="producers" element={<Producers/>}/>
      </Routes>
    </div>
  );
};

export default App;
