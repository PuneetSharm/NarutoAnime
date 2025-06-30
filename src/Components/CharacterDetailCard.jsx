import { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import DebutDetails from "./DebutDetails";
import JutsuDetails from "./JutsuDetails";

const CharacterDetailCard = ({ details }) => {
  // console.log(details);

  const [tabIndex, setTabIndex] = useState(1);

  function images() {
    if (details?.images?.length === 1) {
      return details?.images[0];
    } else if (details?.images?.length > 1) {
      return details?.images[1];
    }
  }

  const tabOptions = [
    {
      id: 1,
      tagName: "Family",
    },
    {
      id: 2,
      tagName: "Debut",
    },
    {
      id: 3,
      tagName: "Jutsu",
    },
  ];

  const handleTabClick = (index) => {
    console.log(tabIndex);
    setTabIndex(index);
  };
  console.log(tabIndex);

  return (
    <div className="border-2 border-blue-300 shadow-md rounded-md">
      <div className="flex space-y-4">
        {details?.images?.length > 0 && (
          <img src={images()} alt={details?.name} className="py-4 mx-2" />
        )}
        <div className="font-medium flex flex-col gap-1 text-lg mx-2">
          <p className="text-xl font-semibold text-green-600">
            Name : {details?.name}
          </p>
          <p>Birthdate : {details?.personal?.birthdate}</p>
          <p>Sex : {details?.personal?.sex}</p>
          <p>Clan : {details?.personal?.clan} </p>
          <p>Bloodtype : {details?.personal?.bloodType} </p>
        </div>
      </div>
      <div className="font-semibold text-base mx-2 gap-4 rounded-full bg-slate-400 py-2 px-2 items-center inline-flex">
        {tabOptions.map((tab) => {
          const isActive = tabIndex === tab.id;

          return (
            <div
              key={tab?.id}
              className={`
            rounded-full text-black cursor-pointer px-8 py-2
            transition-all duration-300 ease-in
          ${
            isActive
              ? "bg-white scale-105 shadow-md text-black"
              : "text-white hover:scale-105"
          }
        `}
              onClick={() => handleTabClick(tab?.id)}
            >
              <span>{tab?.tagName}</span>
            </div>
          );
        })}
      </div>
      {tabIndex === 1 && <FamilyDetails details={details?.family} />}
      {tabIndex === 2 && <DebutDetails details={details?.debut} />}
      {tabIndex === 3 && <JutsuDetails details={details?.jutsu} />}
    </div>
  );
};
export default CharacterDetailCard;
