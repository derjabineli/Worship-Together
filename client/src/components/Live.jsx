import React, { useEffect, useState, useContext } from "react";
import SongGetter from "../apis/SongGetter";
import { SongContext } from "../context/SongsContext";

const Live = () => {
  const { songs, setSongs } = useContext(SongContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SongGetter.get("/");
        setSongs(response.data.data.songs);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const liveSongs = songs.filter((song) => song.live);

  return (
    <div className="songs">
      {liveSongs.map((song, index) => (
        <div key={song.id} className="song">
          <h1>{song.title}</h1>
          <h2>by {song.author}</h2>
          <div>
            <p dangerouslySetInnerHTML={{ __html: song.lyrics }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Live;
