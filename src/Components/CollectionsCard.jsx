const CollectionsCard = ({ value, handleCollectionClick }) => {
  return (
    <div
      className="px-4 py-4 my-4 mx-4 border rounded-md shadow-md shadow-green-200 hover:cursor-pointer hover:bg-green-200 hover:shadow-gray-400"
      onClick={handleCollectionClick}
    >
      <h3 className="font-medium text-2xl text-center">{value.collection}</h3>
    </div>
  );
};
export default CollectionsCard;
