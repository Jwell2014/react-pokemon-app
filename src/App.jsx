import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import ListPokemon from "./models/listPokemon";
import AllPokemon from "./pages/AllPokemon";
import DetailPokemon from "./pages/DetailPokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(ListPokemon);
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/list" element={<AllPokemon pokemons={pokemons} />} />
          <Route path="/list/:id" element={<DetailPokemon />} />
        </Routes>
      </div>
    </Router>
  );
}
