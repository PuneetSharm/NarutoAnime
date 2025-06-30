import React, { useEffect, useState } from "react";

const PaginationNewComponent = ({
  totalCount,
  pageSize,
  handleClick,
  selectedPage,
}) => {
  const [numberOfPages, setNewOfPages] = useState([]);

  useEffect(() => {
    if (totalCount != 0) {
      const numberOfPages = Math.ceil(totalCount / pageSize);
      const numberArray = Array.from(
        { length: numberOfPages },
        (_, index) => index + 1
      );
      setNewOfPages(numberArray);
    }
  }, [totalCount]);

  return (
    <div className="flex flex-wrap gap-2">
      {numberOfPages?.map((num) => (
        <div
          key={num}
          onClick={() => handleClick(num)}
          className={`w-12 h-12 ${
            selectedPage === num
              ? "bg-black text-white"
              : "bg-blue-500 text-white"
          }  flex items-center justify-center rounded cursor-pointer`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default PaginationNewComponent;
