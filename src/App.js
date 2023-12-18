import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import MusicList from "./pages/MusicPage/MusicListPage";
import Footer from "./style/Footer";
import MusicInfo from "./pages/MusicPage/MusicInfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicRegistPage from "./pages/MusicPage/MusicRegistPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<MusicList />} />
        <Route path="/music-info/:id" element={<MusicInfo />} /> */}
        <Route path="/" element={<MusicRegistPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
