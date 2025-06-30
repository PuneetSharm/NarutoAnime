import { useEffect, useState } from "react";

const ClansCard = ({ clanData }) => {
  return (
    <div className="w-full rounded-md border px-4 py-4 border-blue-300 shadow-md text-base">
      <p>
        <span className="px-2 text-center font-bold">Name</span> :{" "}
        {clanData?.name}
      </p>
      <p>
        <span className="px-2 text-center font-bold">Number of Members</span> :{" "}
        {clanData?.characters?.length}
      </p>
    </div>
  );
};
export default ClansCard;
