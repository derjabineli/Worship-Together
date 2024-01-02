import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SongEdit from "./routes/SongEdit";
import { SongContext, SongContextProvider } from "./context/SongsContext";
import NewSong from "./routes/NewSong";
import Live from "./routes/Live";

function App() {
  return (
    <SongContextProvider>
      <div className="container-lg">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs/:id/update" element={<SongEdit />} />
            <Route path="/songs/new" element={<NewSong />} />
            <Route path="/live" element={<Live />} />
          </Routes>
        </Router>
      </div>
    </SongContextProvider>
  );
}

export default App;
