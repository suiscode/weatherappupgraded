import Image from "next/image";
import React from "react";

function Suggestion({
  autoData,
  setLocationToFind,
  setVisibilty,
  visibilty,
  setLocation,
  selectedSuggestionIndex,
  handleItemClick
}) {
  const hasRegion = autoData.some((item) => item.place_type.includes("region"));

  

  const handleKeyPress = (event, item) => {
    if (event.key === "Enter") {
      handleItemClick(item);
    }
  };

  const selectPlaceName = (event) => {
    console.log(event.currentTarget.id);
  };

  return (
    <div
      className={`${
        autoData.length && visibilty ? "flex" : "hidden"
      } flex-col w-[520px] bg-white bg-opacity-80 absolute z-50 top-[130px] left-[50px] rounded-3xl py-4 px-8`}
    >
      {autoData.map((item, index) => {
        
          return (
            <li
              id={item.place_name}
              onClick={selectPlaceName}
              key={crypto.randomUUID()}
              className={`flex gap-4 ${index === selectedSuggestionIndex ? 'selected' : ''}`}
            >
              <Image src="Pin.svg" width={32} height={32} alt="pin" />
              <h1
                className={` text-[28px] cursor-pointer h-[40px] overflow-hidden `}
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => handleKeyPress(e, item)}
              >
                {item.place_name}
              </h1>
            </li>
          );
        
      })}
      
      {!hasRegion && <p>No results</p>}
    </div>
  );
}

export default Suggestion;
