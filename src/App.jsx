import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Randomizer from "./components/Randomizer";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Randomizer />} />
          <Route path="songlist" element={<SongList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
