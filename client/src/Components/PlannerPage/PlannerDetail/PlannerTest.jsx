import React from "react";
import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const PlannerTest = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const handlePlaceSelect = async (address) => {
    setSelectedPlace(address);
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      // latLng.latitude와 latLng.longitude를 추가 처리에 사용합니다
      console.log("선택한 장소:", address);
      console.log("좌표:", latLng);
    } catch (error) {
      console.error("에러:", error);
    }
  };
  return (
    <div>
      <PlacesAutocomplete
        value={selectedPlace}
        onChange={setSelectedPlace}
        onSelect={handlePlaceSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "장소 검색" })} />
            <div>
              {loading && <div>로딩 중...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#e2e2e2" : "#ffffff",
                };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={suggestion.placeId}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default PlannerTest;
