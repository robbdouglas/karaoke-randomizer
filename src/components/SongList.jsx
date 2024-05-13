import React from "react";
import { songs } from "../data/songs";
import { Link } from "react-router-dom";

function SongList() {
  return (
    <div>
      <h2>Alle Songs:</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.artist} - {song.title}
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
}

export default SongList;
