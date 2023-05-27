import React, { useEffect, useRef, useState } from "react";
import {
  AddPlanButton,
  AddressDeleteButton,
  // GoogleMap,
  PlannerContainer,
  PlannerDiary,
  PlannerLogo,
  PlannerMaps,
  SelectAddress,
  SelectAddressMap,
} from "./PlannerSty";
import { GoogleMap, Polyline } from "@react-google-maps/api";
import Select from "react-select";

const Planner = () => {
  const mapRef = useRef(null);
  const [hoveredCity, setHoveredCity] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [polylines, setPolylines] = useState([]);
  const [clickPositions, setClickPositions] = useState([]);
  const [time, setTIme] = useState([]);
  const [clickTIme, setClickTime] = useState("");
  const [selectedDay, setSelectedDay] = useState(1);

  // useEffect(() => {
  //   const initMap = () => {
  //     const mapOptions = {
  //       center: { lat: 37.5665, lng: 126.978 },
  //       zoom: 7,
  //     };

  //     const map = new window.google.maps.Map(mapRef.current, mapOptions);

  //     map.addListener("click", (event) => {
  //       const geocoder = new window.google.maps.Geocoder();

  //       geocoder.geocode({ location: event.latLng }, (results, status) => {
  //         if (status === "OK") {
  //           if (results.length > 0) {
  //             const addressComponents = results[0].address_components;
  //             const city = addressComponents.find((component) =>
  //               component.types.includes("administrative_area_level_1")
  //             );
  //             const local = addressComponents.find((component) =>
  //               component.types.includes("locality")
  //             );
  //             const sublocality = addressComponents.find((component) =>
  //               component.types.includes("sublocality")
  //             );
  //             const neighborhood = addressComponents.find((component) =>
  //               component.types.includes("neighborhood")
  //             );

  //             let selectedAddress = "";

  //             if (city) {
  //               selectedAddress += city.long_name + "/ ";
  //             }
  //             if (local) {
  //               selectedAddress += local.long_name + "/ ";
  //             }
  //             if (sublocality) {
  //               selectedAddress += sublocality.long_name + "/ ";
  //             }
  //             if (neighborhood) {
  //               selectedAddress += neighborhood.long_name + "/ ";
  //             }

  //             setSelectedAddress(selectedAddress);
  //           }
  //         } else {
  //           console.error("Geocoder failed due to:", status);
  //         }
  //       });
  //     });
  //   };

  //   const loadGoogleMapScript = () => {
  //     if (
  //       typeof window.google === "undefined" ||
  //       typeof window.google.maps === "undefined"
  //     ) {
  //       const script = document.createElement("script");
  //       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA7-2aC-Xhui7haVAdH0p0yFLcO3QwRP-M&v=3&libraries=places`;
  //       script.async = true;
  //       script.defer = true;
  //       script.addEventListener("load", initMap);
  //       document.body.appendChild(script);
  //     } else {
  //       initMap();
  //     }
  //   };

  //   loadGoogleMapScript();
  // }, []);

  // const handleAddPlan = () => {
  // if (selectedAddress.trim() !== "") {
  //   const newAddresses = [selectedAddress, ...savedAddresses];
  //   setSavedAddresses(newAddresses);
  //   setSelectedAddress("");
  // }
  // };

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
        }
      } else {
        console.error("Geocoder failed due to:", status);
      }
    });
    // const location = `Latitude: ${lat}, Longitude: ${lng}`;

    // setSelectedAddress(location);
  };

  const handleAddPlan = () => {
    if (selectedAddress.trim() !== "") {
      const newAddresses = [selectedAddress, ...savedAddresses];
      setSavedAddresses(newAddresses);
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
    setSavedAddresses((prevAddresses) =>
      prevAddresses.filter((savedAddress) => savedAddress !== address)
    );
    console.log(index);
    setPolylines((prevPolylines) =>
      prevPolylines.filter((_, idx) => idx !== index)
    );
    setClickPositions((prevPositions) =>
      prevPositions.filter((_, idx) => idx !== index)
    );
  };

  const Complete = () => {
    setSelectedDay(selectedDay + 1);
    setTIme([
      ...time,
      { value: selectedDay + "일차", label: selectedDay + "일차" },
    ]);
  };

  return (
    <PlannerContainer>
      <PlannerLogo>Planner</PlannerLogo>
      {/* <PlannerMaps>
        <GoogleMap ref={mapRef} id="map" />
        {hoveredCity && <div className="hovered-city">{hoveredCity}</div>}
      </PlannerMaps> */}
      <PlannerMaps>
        <GoogleMap
          mapContainerStyle={{
            borderRadius: "20px",
            height: "680px",
            margin: "10px",
          }}
          center={{ lat: 37.5665, lng: 126.978 }}
          zoom={7}
          onClick={(event) => handleMapClick(event)}
          apiKey="AIzaSyA7-2aC-Xhui7haVAdH0p0yFLcO3QwRP-M"
        >
          <div>
            <Polyline
              path={clickPositions}
              options={{ strokeColor: "#FF0000" }} // Polyline 스타일을 지정할 수 있습니다
            />
          </div>
        </GoogleMap>
      </PlannerMaps>
      <PlannerDiary>
        <Select
          onChange={(e) => setClickTime({ ...clickTIme, value: e.value })}
          options={time}
        />

        <SelectAddress>{selectedAddress}</SelectAddress>
        {savedAddresses
          .slice(0)
          .reverse()
          .map((address, index) => (
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
