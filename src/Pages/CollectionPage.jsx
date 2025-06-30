import CollectionsCard from "../Components/CollectionsCard";
import { useEffect, useState } from "react";

import { CollectionOptions } from "../utils/helper";
import {
  getCharacterInfo,
  getClanInfo,
  getVillageData,
} from "../Services/axiosService";
import { useNavigate, useNavigation } from "react-router-dom";

const CollectionPage = () => {
  const [clansData, setClansData] = useState([]);
  const [villagesData, setVillagesData] = useState([]);
  const navigate = useNavigate();
  //   const [collection]

  useEffect(() => {
    const villages = async () => {
      try {
        const villagesResponse = await getVillageData();
        const villageData = villagesResponse?.villages;
        setVillagesData(villageData);
      } catch (error) {
        console.error(error.message);
      }
    };
    villages();
  }, []);

  const handleCollectionClick = (cardName) => {
    if (cardName === "Characters") {
      navigate("/characters");
    }
    if (cardName === "Clans") {
      navigate("/clans");
    }
  };

  return (
    <div className="bg-blue-300 w-full min-h-screen">
      <h1 className="font-bold text-5xl text-center">Collections</h1>
      <div className="grid grid-cols-4 gap-4">
        {CollectionOptions.map((collectionCard) => {
          return (
            <CollectionsCard
              key={collectionCard.id}
              value={collectionCard}
              handleCollectionClick={() =>
                handleCollectionClick(collectionCard.collection)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default CollectionPage;
