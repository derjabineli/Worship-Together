import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SongGetter from "../apis/SongGetter";

const CreateSong = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [live, setLive] = useState(false);
  const navigate = useNavigate();

  const handleLive = () => {
    setLive(!live);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const updatedSong = await SongGetter.post("", {
      name,
      author,
      lyrics,
      live,
    });
    if (updatedSong.status === 201) {
      navigate("/");
    }
  };

  return (
    <div>
      <form action="">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <div className="mb-3">
          <label htmlFor="lyrics" className="form-label">
            Lyrics
          </label>
          <textarea
            type="password"
            className="form-control"
            id="lyrics"
            value={lyrics}
            onChange={(e) => {
              setLyrics(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={true}
            checked={live}
            onChange={handleLive}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Live
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={false}
            checked={!live}
            onChange={handleLive}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Not Live
          </label>
        </div>
        <button
          onClick={handleCreate}
          type="submit"
          className="btn btn-primary"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateSong;
