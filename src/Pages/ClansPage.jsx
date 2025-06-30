import { useEffect, useState } from "react";
import ClansCard from "../Components/ClanComponents/ClansCard";
import { getClansPaginatedData } from "../Services/axiosService";
import PaginationNewComponent from "../Components/PaginationNewComponent";

const ClansPage = () => {
  const [clanData, setClanData] = useState([]);
  const [totalClans, setTotalClans] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);

  const pageSize = 15;
  useEffect(() => {
    const getClansInfo = async () => {
      const clansResponse = await getClansPaginatedData(pageSize, selectedPage);
      const clansData = clansResponse;
      setTotalClans(clansResponse.total);
      setClanData(clansData.clans);
    };
    getClansInfo();
  }, [selectedPage]);

  const handlePageChange = (pageNumberClicked) => {
    setSelectedPage(pageNumberClicked);
  };

  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-3 gap-4 px-4 py-2 place-items-center ">
        {clanData.map((clan) => {
          return <ClansCard clanData={clan} key={clan.id} />;
        })}
      </div>
      <div className="place-items-center my-4">
        <PaginationNewComponent
          totalCount={totalClans}
          pageSize={pageSize}
          handleClick={handlePageChange}
          selectedPage={selectedPage}
        />
      </div>
    </div>
  );
};
export default ClansPage;
