import { useEffect, useState } from "react";
import SpinnerComponent from "./SpinnerComponent";

const FamilyDetails = ({ details }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  let detailsValue;
  let dataUnavailable;
  if (details) {
    detailsValue = Object?.entries(details);
  } else {
    dataUnavailable = "No Family Found";
  }

  return (
    <div className="mx-2 my-2 grid grid-cols-2 gap-2">
      {isLoading ? (
        <SpinnerComponent />
      ) : details ? (
        detailsValue.map((item) => {
          return (
            <div className="border-2 text-base gap-2 rounded-md px-2 py-1">
              <span key={item[0]} className="font-semibold">
                {item[0].toUpperCase()} :
              </span>
              <span key={item[1]} className="font-medium px-2">
                {item[1]}
              </span>
            </div>
          );
        })
      ) : (
        <p className="font-bold text-lg text-red-500">{dataUnavailable}</p>
      )}
      {/* {details ? (
        detailsValue.map((item) => {
          return (
            <div className="border-2 text-base gap-2 rounded-md px-2 py-1">
              <span key={item[0]} className="font-semibold">
                {item[0].toUpperCase()} :
              </span>
              <span key={item[1]} className="font-medium px-2">
                {item[1]}
              </span>
            </div>
          );
        })
      ) : (
        <p className="font-bold text-lg text-red-500">{dataUnavailable}</p>
      )} */}
    </div>
  );
};
export default FamilyDetails;
