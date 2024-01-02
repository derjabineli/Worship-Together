import React from "react";
import Header from "../components/Header";
import SongList from "../components/SongList";
import AdminNav from "../components/AdminNav";

const Home = () => {
  return (
    <div>
      <Header />
      <AdminNav />
      <SongList />
    </div>
  );
};

export default Home;
