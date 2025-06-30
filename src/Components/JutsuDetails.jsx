import React from "react";

const JutsuDetails = ({ details }) => {
  console.log(details);
  return (
    <div className="mx-2 my-2 min-h-screen grid grid-cols-4 gap-2">
      {details?.map((item) => {
        return (
          <span className="border-2 rounded-md px-2 py-1 place-content-center text-base font-bold">
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default JutsuDetails;
