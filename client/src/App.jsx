import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SongEdit from "./routes/SongEdit";
import { SongContext, SongContextProvider } from "./context/SongsContext";

function App() {
  return (
    <SongContextProvider>
      <div className="container-lg">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs/:id/update" element={<SongEdit />} />
          </Routes>
        </Router>
      </div>
    </SongContextProvider>
  );
}

export default App;
