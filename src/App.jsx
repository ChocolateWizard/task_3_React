import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import { movies } from "./testing/dummyData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
