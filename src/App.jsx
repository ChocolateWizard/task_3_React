import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetails from "./components/movie/details/MovieDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";



function App() {

  return (
    <div className="min-h-screen">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
