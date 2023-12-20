import React from "react";
import SongGetter from "../apis/SongGetter";
import { useNavigate } from "react-router-dom";
import UpdateSong from "../components/UpdateSong";

const SongEdit = () => {
  return (
    <div>
      <UpdateSong />
    </div>
  );
};

export default SongEdit;
