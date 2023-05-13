import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetails from "./components/movie/details/MovieDetails";
import ShowDetails from "./components/show/details/ShowDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";
import MoviesPage from "./components/movie/page/MoviesPage";
import ShowsPage from "./components/show/page/ShowsPage";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movies" exact element={<MoviesPage />} />
            <Route path="/shows" exact element={<ShowsPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/show/:id" element={<ShowDetails />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
