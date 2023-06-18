import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  StartDate,
  TodoBrand,
  TodoContainer,
  TodoList,
} from "./PlannerDetailSty";
import { Link, useLocation } from "react-router-dom";
import "./PlannerDetail.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PlanSchedule from "./PlanSchedule";
import Logo from "../images/logo.png";

const PlannerDetail = () => {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const { markers, startDate, durations } = location.state || {};
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const data = location.state.markers;
  const [center, setCenter] = useState(data[0].position);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [routeMarkers, setRouteMarkers] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [taskdate, setTaskDate] = useState();
  const [tasklocal, setTaskLocal] = useState();

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
        setRouteMarkers(routemarkers);
        if (!routeMarkers) {
        }
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

          // 거리를 경로 위에 표시하는 함수
          const displayDistanceOnRoute = (result) => {
            if (result.routes && result.routes.length > 0) {
              const route = result.routes[0];
              const legs = route.legs;

              let totalDistance = 0;
              const routeCoordinates = [];

              legs.forEach((leg) => {
                const distanceInKm = (leg.distance.value / 1000).toFixed(2);
                totalDistance += leg.distance.value;

                const midPointIndex = Math.floor(leg.steps.length / 2);
                const midPoint = leg.steps[midPointIndex].start_location;
                routeCoordinates.push(midPoint);

                const infowindow = new window.google.maps.InfoWindow({
                  content: `거리: ${distanceInKm} km`,
                });

                const marker = new window.google.maps.Marker({
                  position: midPoint,
                  map: map,
                });

                infowindow.open(map, marker);
              });

              const totalDistanceInKm = (totalDistance / 1000).toFixed(2);
              console.log("전체 거리:", totalDistanceInKm, "km");

              setSelectedRoute({
                distance: totalDistanceInKm,
                coordinates: routeCoordinates,
              });
            } else {
              console.warn("경로 정보가 없습니다.");
            }
          };

          // 경로 계산 요청 시 거리 계산 함수 호출
          directionsService.route(request, function (result, status) {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
              displayDistanceOnRoute(result); // 거리 계산 및 표시
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
  console.log("선택된날:", selectedTask);
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

        return todoDates.map((date) => {
          const schedule = selectedTask ? selectedTask.schedule : [];
          return {
            date,
            location: marker.label,
            nation: marker.nation,
            lng: marker.position.lng,
            lat: marker.position.lat,
            completed: false,
            schedule: schedule,
          };
        });
      });

      setTasks(todoList);
    };

    generateTodoList();
  }, [durations, markers, startDate, selectedTask]);

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
          height: "90vh",
          width: "50%",
        }}
      ></div>
    );
  };
  const nickname = localStorage.getItem("nick");

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
    setSelectedTask(task);
    setCenter({ lat: task.lat, lng: task.lng });
    setTaskDate(task.date);
    setTaskLocal(task.location);
  };
  const inputStyle = {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        position: "relative",
        top: "-60px",
        width: "99.82%",
        height: "91.5vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "99.9%",
          height: "60px",
          backgroundColor: "#7bc0f9",
          color: "white",
          fontWeight: "bold",
          zIndex: "1",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <TodoBrand>
            <Link to="/">
              <img src={Logo} style={{ width: "40px", height: "40px" }} />
            </Link>
            <h3 style={{ margin: "7px", marginLeft: "20px" }}>
              {nickname}&nbsp;`s&nbsp;&nbsp;{location.state.title}
            </h3>
          </TodoBrand>
        </div>
        <div style={{ display: "flex", margin: "10px" }}>
          <div
            style={{
              width: "70px",
              textAlign: "center",
              marginRight: "20px",
              backgroundColor: "gray",
              height: "max-content",
              padding: "10px",
              cursor: "pointer",
              fontSize: "14px",
              borderRadius: "15px",
            }}
          >
            저장&닫기
          </div>
          <div
            style={{
              width: "70px",
              textAlign: "center",
              height: "max-content",
              backgroundColor: "orange",
              padding: "10px",
              cursor: "pointer",
              fontSize: "14px",
              borderRadius: "15px",
            }}
          >
            완료
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TodoContainer className="scroll-content">
          <StartDate>출발일: {startDate.toLocaleDateString()}</StartDate>
          <TodoList
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
                  <div className="date">{task.date}</div>
                  <div className="location">
                    {task.location} - {task.nation}
                  </div>
                </div>
              </div>
            ))}
          </TodoList>
        </TodoContainer>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div
              style={{
                position: "absolute",
                width: "220px",
                right: "100px",
                top: "60px",
                marginTop: "10px",
                zIndex: "5",
              }}
            >
              <input
                {...getInputProps({
                  placeholder: "장소를 검색해보세요.",
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
        <PlanSchedule
          taskdate={taskdate}
          tasklocal={tasklocal}
          task={tasks}
          isDragging={isDragging}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          selectedTaskIndex={selectedTaskIndex}
          setSelectedTaskIndex={setSelectedTaskIndex}
        />
      </div>
      <div
        id="map"
        style={{
          display: "flex",
          width: "54%",
          height: "88.5vh",
          position: "relative",
          top: "70px",
          left: "46%",
          zIndex: 1,
        }}
      >
        {renderMap()}
      </div>
    </div>
  );
};

export default PlannerDetail;
