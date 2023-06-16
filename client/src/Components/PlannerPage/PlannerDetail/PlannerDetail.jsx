import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  StartDate,
  TodoBrand,
  TodoContainer,
  TodoHeader,
  TodoList,
  TodoMemoContainer,
} from "./PlannerDetailSty";
import { useLocation } from "react-router-dom";
import "./PlannerDetail.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const PlannerDetail = () => {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const { markers, startDate, durations } = location.state || {};
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const data = location.state.markers;
  const [center, setCenter] = useState(data[0].position);
  const [map, setMap] = useState(null);
  const [memoList, setMemoList] = useState([]);
  const [memoInput, setMemoInput] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: center,
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
      });

      const routemarkers = [];

      const addMarker = (location) => {
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
        });

        routemarkers.push({
          position: {
            lat: marker.getPosition().lat(),
            lng: marker.getPosition().lng(),
          },
        });

        const waypoints = routemarkers.map((marker) => ({
          location: marker.position,
        }));

        if (waypoints.length >= 2) {
          const request = {
            origin: waypoints[0].location,
            destination: waypoints[waypoints.length - 1].location,
            waypoints: waypoints.slice(1, waypoints.length - 1),
            travelMode: window.google.maps.TravelMode.WALKING,
          };

          // 경로 계산 후 거리를 표시하는 함수
          const calculateDistance = (result) => {
            if (result.routes && result.routes.length > 0) {
              const route = result.routes[0];
              let totalDistance = 0;

              // 경로의 각 세그먼트의 거리를 합산 및 마커 표시
              for (let i = 0; i < route.legs.length; i++) {
                const leg = route.legs[i];
                const distanceInKm = (leg.distance.value / 1000).toFixed(2); // 세그먼트의 거리를 km로 변환

                // 세그먼트의 중간 지점에 마커를 추가하고 거리를 표시
                const midPointIndex = Math.floor(leg.steps.length / 2);
                const midPoint = leg.steps[midPointIndex].start_location;
                const marker = new window.google.maps.Marker({
                  position: midPoint,
                  map: map,
                });
                const infowindow = new window.google.maps.InfoWindow({
                  content: `${distanceInKm} km`,
                });
                infowindow.open(map, marker);

                totalDistance += leg.distance.value;
              }

              // 전체 거리를 km로 변환하여 표시
              const totalDistanceInKm = (totalDistance / 1000).toFixed(2);
              console.log("전체 거리:", totalDistanceInKm, "km");
              // 거리를 원하는 위치에 표시하거나 상태로 저장하여 사용할 수 있습니다.
            } else {
              console.warn("경로 정보가 없습니다.");
            }
          };

          // 경로 계산 요청 시 거리 계산 함수 호출
          directionsService.route(request, function (result, status) {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
              calculateDistance(result); // 거리 계산 및 표시
            } else if (
              status === window.google.maps.DirectionsStatus.ZERO_RESULTS
            ) {
              console.warn("No route found for the given locations.");
              directionsRenderer.setDirections({ routes: [] });
            } else {
              console.error("Directions request failed:", status);
            }
          });
        }

        marker.addListener("click", function () {
          alert("마커가 클릭되었습니다!");
        });
      };

      map.addListener("click", function (event) {
        addMarker(event.latLng);
      });
    };
    const input = document.getElementById("search-input");
    const autocomplete = new window.google.maps.places.Autocomplete(input);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.error("No geometry found for the selected place.");
        return;
      }

      const latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setCenter(latLng); // 선택된 장소의 좌표로 지도를 이동합니다.
      setCoordinates(latLng); // 선택된 장소의 좌표를 상태에 저장합니다.
    });

    initMap();
  }, [center]);

  // 플랜마커와 날짜를 기반으로 투두리스트 생성
  useEffect(() => {
    const generateTodoList = () => {
      const todoList = durations.flatMap((duration, index) => {
        const marker = markers[index];
        const todoDates = [];

        for (let i = 0; i < duration; i++) {
          const todoDate = new Date(startDate);
          todoDate.setDate(
            todoDate.getDate() + index * Math.max(...durations) + i
          );
          todoDates.push(todoDate.toLocaleDateString());
        }

        return todoDates.map((date) => ({
          date,
          location: marker.label,
          nation: marker.nation,
          lng: marker.position.lng,
          lat: marker.position.lat,
          completed: false,
        }));
      });

      setTasks(todoList);
    };

    generateTodoList();
  }, [markers]);

  // 경로 계산 후 거리를 표시하는 함수

  const handleSelect = async (address) => {
    setAddress(address);

    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setCenter(latLng); // 검색된 장소의 좌표로 지도를 이동합니다.
      setCoordinates(latLng); // 선택된 장소의 좌표를 상태에 저장합니다.
    } catch (error) {
      console.error("Error fetching geolocation:", error);
    }
  };

  const renderMap = () => {
    if (!coordinates.lat || !coordinates.lng) {
      return null;
    }

    return (
      <div
        id="map"
        style={{
          height: "868px",
          width: "70%",
          position: "absolute",
          right: "0",
        }}
      ></div>
    );
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartY(event.clientY);
    setStartScrollTop(scrollContainerRef.current.scrollTop);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    event.preventDefault();
    const deltaY = event.clientY - startY;
    scrollContainerRef.current.scrollTop = startScrollTop - deltaY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTaskClick = (index, task) => {
    setSelectedTaskIndex(index);
    setCenter({ lat: task.lat, lng: task.lng });
  };
  const handleAddMemo = () => {
    // Add a new memo item to the list
    const newMemoItem = {
      id: Date.now(),
      text: memoInput,
      date: new Date().toLocaleDateString(), // Use current date
    };

    setMemoList((prevMemoList) => [...prevMemoList, newMemoItem]);
    setMemoInput(""); // Clear the memo input field
  };
  const handleDeleteMemo = (id) => {
    // Remove the memo item with the specified id
    setMemoList((prevMemoList) =>
      prevMemoList.filter((memo) => memo.id !== id)
    );
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TodoContainer>
        <TodoHeader>
          <TodoBrand>여행 투두리스트</TodoBrand>
          <StartDate>출발일: {startDate.toLocaleDateString()}</StartDate>
        </TodoHeader>
        <TodoList
          className="scroll-content"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {tasks.map((task, index) => (
            <div
              className={`task ${
                selectedTaskIndex === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleTaskClick(index, task)}
            >
              <div className="task-info">
                <div>day{index + 1}</div>
                <p className="date">{task.date}</p>
                <p className="location">
                  {task.location} - {task.nation}
                </p>
              </div>
            </div>
          ))}
        </TodoList>
      </TodoContainer>
      <div
        id="map"
        style={{
          height: "868px",
          width: "70%",
          position: "absolute",
          right: "0",
        }}
      >
        {renderMap()}
      </div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ position: "relative", left: "700px" }}>
            <input
              {...getInputProps({
                placeholder: "Search Places",
                style: inputStyle,
              })}
            />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
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
      <TodoMemoContainer>
        <div className="memo-header">
          <h2>Todo Memo</h2>
        </div>
        <div className="memo-form">
          <textarea
            placeholder="Write a memo..."
            value={memoInput}
            onChange={(e) => setMemoInput(e.target.value)}
          />
          <button className="add-button" onClick={handleAddMemo}>
            Add
          </button>
        </div>
        <div className="memo-list">
          {memoList.map((memo) => (
            <div className="memo-card" key={memo.id}>
              <p className="memo-text">{memo.text}</p>
              <p className="memo-date">{memo.date}</p>
              <button onClick={() => handleDeleteMemo(memo.id)}>삭제</button>
            </div>
          ))}
        </div>
      </TodoMemoContainer>
    </div>
  );
};

export default PlannerDetail;
