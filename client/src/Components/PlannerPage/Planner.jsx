import React, { useState } from "react";
import {
  AddPlanButton,
  AddressDeleteButton,
  PlannerContainer,
  PlannerDiary,
  PlannerLogo,
  PlannerMaps,
  SelectAddress,
  SelectAddressMap,
} from "./PlannerSty";
import { GoogleMap, Polyline } from "@react-google-maps/api";
import Select from "react-select";

const COLORS = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

const MapComponent = React.memo(
  ({ clickPositions, handleMapClick, center }) => (
    <GoogleMap
      mapContainerStyle={{
        borderRadius: "20px",
        height: "680px",
        margin: "10px",
      }}
      center={center}
      zoom={7}
      onClick={(event) => handleMapClick(event)}
      apiKey=""
    >
      {clickPositions.map((positions, index) => (
        <Polyline
          key={index}
          path={positions}
          options={{ strokeColor: COLORS[index % COLORS.length] }}
        />
      ))}
    </GoogleMap>
  )
);
const Planner = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [polylines, setPolylines] = useState([]);
  const [clickPositions, setClickPositions] = useState([]);
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [time, setTime] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);

  const handleMapClick = (event) => {
    const { latLng } = event;
    const lat = latLng.lat();
    const lng = latLng.lng();
    const position = { lat, lng };
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: event.latLng }, (results, status) => {
      if (status === "OK") {
        if (results.length > 0) {
          const addressComponents = results[0].address_components;
          const city = addressComponents.find((component) =>
            component.types.includes("administrative_area_level_1")
          );
          const local = addressComponents.find((component) =>
            component.types.includes("locality")
          );
          const sublocality = addressComponents.find((component) =>
            component.types.includes("sublocality")
          );
          const neighborhood = addressComponents.find((component) =>
            component.types.includes("neighborhood")
          );

          let selectedAddress = "";

          if (city) {
            selectedAddress += city.long_name + "/ ";
          }
          if (local) {
            selectedAddress += local.long_name + "/ ";
          }
          if (sublocality) {
            selectedAddress += sublocality.long_name + "/ ";
          }
          if (neighborhood) {
            selectedAddress += neighborhood.long_name + "/ ";
          }

          setSelectedAddress(selectedAddress);
          setPolylines((prevPositions) => [...prevPositions, position]);
          setCenter({ lat, lng });
        }
      } else {
        console.error("Geocoder failed due to:", status);
      }
    });
  };

  const handleAddPlan = () => {
    if (selectedAddress.trim() !== "") {
      const addresses = savedAddresses[selectedDay] || [];
      const newAddresses = [selectedAddress, ...addresses];

      setSavedAddresses((prevAddresses) => ({
        ...prevAddresses,
        [selectedDay]: newAddresses,
      }));
      setSelectedAddress("");

      if (polylines.length > 0) {
        const latestPosition = polylines[polylines.length - 1];
        const position = {
          lat: latestPosition.lat,
          lng: latestPosition.lng,
        };

        setClickPositions((prevPositions) => [...prevPositions, position]);
      }
    }
  };

  const handleDeleteAddress = (address, index) => {
    const addresses = savedAddresses[selectedDay] || [];
    const newAddresses = addresses.filter(
      (savedAddress) => savedAddress !== address
    );

    setSavedAddresses((prevAddresses) => ({
      ...prevAddresses,
      [selectedDay]: newAddresses,
    }));

    setPolylines((prevPolylines) =>
      prevPolylines.filter((_, idx) => idx !== index)
    );

    setClickPositions((prevPositions) =>
      prevPositions.filter((_, idx) => idx !== index)
    );
  };

  const handleSelectDay = (selected) => {
    setSelectedDay(selected.value);
  };

  const Complete = () => {
    setSelectedDay(selectedDay + 1);
    setTime([
      ...time,
      { value: selectedDay + "일차", label: selectedDay + "일차" },
    ]);
  };

  return (
    <PlannerContainer>
      <PlannerLogo>Planner</PlannerLogo>
      <PlannerMaps>
        <MapComponent
          clickPositions={clickPositions}
          handleMapClick={handleMapClick}
          center={center}
        />
      </PlannerMaps>
      <PlannerDiary>
        <Select onChange={handleSelectDay} options={time} />
        <SelectAddress>{selectedAddress}</SelectAddress>
        {savedAddresses[selectedDay] &&
          savedAddresses[selectedDay].map((address, index) => (
            <div key={address}>
              <SelectAddressMap>{address}</SelectAddressMap>
              <AddressDeleteButton
                onClick={() => handleDeleteAddress(address, index)}
              >
                취소
              </AddressDeleteButton>
            </div>
          ))}
      </PlannerDiary>

      <AddPlanButton onClick={handleAddPlan}>+</AddPlanButton>
      <AddPlanButton
        style={{ width: "100px", marginLeft: "10px" }}
        onClick={Complete}
      >
        완료
      </AddPlanButton>
    </PlannerContainer>
  );
};

export default Planner;
