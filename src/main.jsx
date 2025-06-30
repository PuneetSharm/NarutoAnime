import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CollectionPage from "./Pages/CollectionPage";
import CharactersPage from "./Pages/CharactersPage";
import CharacterDetailPage from "./Pages/CharacterDetailPage";
import ClansPage from "./Pages/ClansPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CollectionPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:charId" element={<CharacterDetailPage />} />
      <Route path="/clans" element={<ClansPage />} />
    </Routes>
  </BrowserRouter>
);
