import React, { useContext, useEffect } from "react";
import SongGetter from "../apis/SongGetter";
import { SongContext } from "../context/SongsContext";

function SongList(props) {
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
  return (
    <table className="table table-dark table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Active</th>
        </tr>
      </thead>
      <tbody>
        {songs &&
          songs.map((song) => {
            return (
              <tr key={song.id}>
                <th scope="row">{song.id}</th>
                <td>
                  <a href={"songs/" + song.id + "/update"}>{song.name}</a>
                </td>
                <td>{song.author}</td>
                <td>{song.live ? "Yes" : "No"}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default SongList;
