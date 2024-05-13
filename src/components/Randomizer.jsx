import React, { useState } from "react";
import { Link } from "react-router-dom";
import { songs } from "../data/songs"; // Importiere die Liste der Songs

function Randomizer() {
  const [randomSong, setRandomSong] = useState(null); // State für den zufälligen Song

  // Funktion zum Auswählen eines zufälligen Songs
  const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    setRandomSong(selectedSong);
  };

  return (
    <div>
      <h1>Karaoke Randomizer</h1>
      {/* Button zum Anzeigen eines zufälligen Songs */}
      <button onClick={getRandomSong}>Get Random Song</button>
      {/* Anzeige des zufälligen Songs */}
      {randomSong && (
        <div>
          <h2>Random Song:</h2>
          <p>Artist: {randomSong.artist}</p>
          <p>Title: {randomSong.title}</p>
        </div>
      )}
      <Link to="/songlist">
        <button>Show all songs</button>
      </Link>
    </div>
  );
}

export default Randomizer;
