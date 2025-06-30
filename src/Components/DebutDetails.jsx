import React from "react";

const DebutDetails = ({ details }) => {
  return (
    <div className="mx-2 my-2 grid grid-cols-2 gap-2">
      {details?.appearsIn && (
        <p className="border-2 rounded-md text-base py-1">
          <span className="font-bold px-2">APPEARANCE</span> :{" "}
          {details?.appearsIn}
        </p>
      )}
      {details?.anime && (
        <p className="border-2 rounded-md text-base py-1">
          <span className="font-bold px-2">ANIME</span> : {details?.anime}
        </p>
      )}
      {details?.movie && (
        <p className="border-2 rounded-md text-base py-1">
          <span className="font-bold px-2">MOVIE</span> : {details?.movie}
        </p>
      )}
      {details?.manga && (
        <p className="border-2 rounded-md text-base py-1">
          <span className="font-bold px-2">MANGA</span> : {details?.manga}
        </p>
      )}
      {details?.game && (
        <p className="border-2 rounded-md text-base py-1">
          <span className="font-bold px-2">GAME</span> : {details?.game}
        </p>
      )}
      {details?.novel && (
        <p className="border-2 rounded-md text-base py-1">
          <span className="font-bold px-2">NOVEL</span> : {details?.novel}
        </p>
      )}
    </div>
  );
};

export default DebutDetails;
