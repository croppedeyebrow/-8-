import React from "react";
import Header from "./style/Header";
import GlobalStyle from "./style/GlobalStyle";
import MusicList from "./pages/MusicListPage";
import Footer from "./style/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <MusicList />
      <Footer />
    </>
  );
}

export default App;
