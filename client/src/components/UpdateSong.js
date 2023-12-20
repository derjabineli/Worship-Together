import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongGetter from "../apis/SongGetter";

const UpdateSong = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [live, setLive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SongGetter.get(`/${id}`);
        setName(response.data.data.song[0].name);
        setAuthor(response.data.data.song[0].author);
        setLyrics(response.data.data.song[0].lyrics);
        setLive(response.data.data.song[0].live);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleLive = () => {
    setLive(!live);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedSong = SongGetter.put(`/${id}`, {
      name,
      author,
      lyrics,
      live,
    });
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
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateSong;
