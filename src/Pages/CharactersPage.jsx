import { useEffect, useState } from "react";
import CharactersCard from "../Components/CharactersCard";
import { getPaginatedData } from "../Services/axiosService";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Search from "../Components/Search";
import PaginationNewComponent from "../Components/PaginationNewComponent";
import useDebouncer from "../hooks/useDebouncer";

const CharactersPage = () => {
  const [paginatedData, setPaginatedData] = useState([]);

  const [totalCharacters, setTotalCharacters] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const intialSelectedPageNumber = searchParams.get("page") || 1;
  const intialSearchQuery = searchParams.get("q") || "";
  const [selectedPage, setSelectedPage] = useState(intialSelectedPageNumber);
  const [searchValue, setSearchValue] = useState(intialSearchQuery);
  const debouncedSearchQuery = useDebouncer(searchValue, 500);
  console.log(searchParams);

  // const [searchValueOnEnter, setSearchValueOnEnter] = useState("");

  const navigate = useNavigate();

  //const pageSize = 100;
  const intialPageSize = searchParams.get("limit") || 100;
  const [pageSize, setPageSize] = useState(intialPageSize);
  // console.log(searchName);

  //const numberOfPages = Math.ceil(totalCharacters / pageSize);

  useEffect(() => {
    if (debouncedSearchQuery != "") {
      setSearchParams({
        q: debouncedSearchQuery,
        page: selectedPage,
        limit: pageSize,
      });
    } else {
      setSearchParams({
        page: selectedPage,
        limit: pageSize,
      });
    }
    const getPaginationData = async () => {
      const PaginatedResponse = await getPaginatedData(
        pageSize,
        selectedPage,
        debouncedSearchQuery
      );
      const data = PaginatedResponse?.characters;
      setPaginatedData(data);
      setTotalCharacters(PaginatedResponse.total);
    };

    getPaginationData();

    // let debounceTimeOut;
    // const getPaginationData = async () => {
    //   const PaginatedResponse = await getPaginatedData(
    //     pageSize,
    //     selectedPage,
    //     searchValue
    //   );
    //   const data = PaginatedResponse?.characters;
    //   setPaginatedData(data);
    //   setTotalCharacters(PaginatedResponse.total);
    // };
    // if (searchValue) {
    //   debounceTimeOut = setTimeout(() => {
    //     getPaginationData();
    //   }, 1000);
    // } else {
    //   getPaginationData();
    // }
    // return () => {
    //   clearTimeout(debounceTimeOut);
    // };
  }, [selectedPage, debouncedSearchQuery, pageSize]);

  const handleIndividualCharacter = (id) => {
    navigate(`/characters/${id}`);
  };

  const handleInputChange = (e) => {
    setSelectedPage(1);
    setSearchValue(e.target.value);
  };
  // const handleSearch = (e) => {
  //   if (e.key === "Enter") {
  //     setSearchValueOnEnter(searchValue);
  //     setSearchValue("");
  //   }
  // };

  const handleClickPage = (pageClickedValue) => {
    setSelectedPage(pageClickedValue);
    setSearchParams({ page: pageClickedValue, limit: pageSize });
  };
  return (
    <>
      <div className="container mx-auto px-8 py-4 flex flex-col items-center justify-center">
        <Search
          handleInputChange={handleInputChange}
          // handleSearch={handleSearch}
          searchValue={searchValue}
        />
        <div className="grid grid-cols-4 gap-4 w-full">
          {paginatedData?.map((character) => {
            return (
              <CharactersCard
                cardValue={character}
                key={character?.id}
                handleIndividualCharacter={() =>
                  handleIndividualCharacter(character?.id)
                }
              />
            );
          })}
        </div>
        <div className="flex mt-4 px-4 py-4 gap-2 ">
          {/* {pages.map((page) => {
            return (
              <Pagination
                page={page}
                key={page}
                selectedPage={selectedPage}
                handlePage={() => handlePageChange(page)}
              />
            );
          })} */}
          <PaginationNewComponent
            totalCount={totalCharacters}
            pageSize={pageSize}
            handleClick={handleClickPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
    </>
  );
};
export default CharactersPage;
