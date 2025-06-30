const CharactersCard = ({ cardValue, handleIndividualCharacter }) => {
  return (
    <div
      className="flex flex-col w-64 h-60 rounded-md border border-blue-300 overflow-hidden cursor-pointer"
      onClick={handleIndividualCharacter}
    >
      <img
        className="w-full h-48 object-contain"
        src={cardValue?.images[0]}
        alt={cardValue?.name}
      />
      <div className="flex-1 flex items-center justify-center px-2">
        <span className="font-semibold text-base text-green-800 text-center">
          {cardValue?.name}
        </span>
      </div>
    </div>
  );
};
export default CharactersCard;
