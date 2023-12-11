import React from "react";
import Header from "./style/Header";
import GlobalStyle from "./style/GlobalStyle";
import MusicList from "./pages/MusicPage/MusicListPage";
import Footer from "./style/Footer";
import MusicInfo from "./pages/MusicPage/MusicInfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MusicList />} />
          <Route path="/music-info-page" element={<MusicInfo />} />
        </Routes>
      </Router>
      {/* <GlobalStyle /> */}
      {/* <Header /> */}
      {/* <MusicList /> */}
      {/* <MusicInfo /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
