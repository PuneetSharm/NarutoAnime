import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharDataById } from "../Services/axiosService";
import CharacterDetailCard from "../Components/CharacterDetailCard";

const CharacterDetailPage = () => {
  const [characterDetail, setCharacterDetail] = useState([]);
  const { charId } = useParams();

  useEffect(() => {
    const characterDetails = async () => {
      const characterResponse = await getCharDataById(charId);
      setCharacterDetail(characterResponse);
    };
    characterDetails();
  }, []);
  console.log(charId);

  return (
    <div className="container w-full min-h-screen mx-auto px-2 py-4">
      <h1 className="text-5xl text-center font-bold px-4 py-4">
        Character details
      </h1>
      <CharacterDetailCard details={characterDetail} />
    </div>
  );
};

export default CharacterDetailPage;
