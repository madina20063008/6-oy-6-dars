import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main";
import { Text } from "./Components/Section";
import { Map } from "./Components/Map";
import { Menu } from "./Components/Menu";
import { Footer } from "./Components/footer";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Text />
              <Map />
              <Footer />
            </>
          } />

          <Route path="/menu/*" element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


