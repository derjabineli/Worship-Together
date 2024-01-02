import React, { useState, createContext } from "react";

export const SongContext = createContext();

export const SongContextProvider = (props) => {
  const [songs, setSongs] = useState([]);

  return (
    <SongContext.Provider value={{ songs, setSongs }}>
      {props.children}
    </SongContext.Provider>
  );
};
