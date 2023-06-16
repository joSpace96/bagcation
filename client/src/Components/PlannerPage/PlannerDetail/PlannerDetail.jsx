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

  let routemarkers = [];

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
        }); // 마커의 위치 정보를 배열에 추가
        console.log(routemarkers);

        const waypoints = routemarkers.map((marker) => ({
          location: marker.position,
        }));

        const request = {
          origin: waypoints[0].location,
          destination: waypoints[waypoints.length - 1].location,
          waypoints: waypoints.slice(1, waypoints.length - 1),
          travelMode: window.google.maps.TravelMode.WALKING,
        };

        directionsService.route(request, function (result, status) {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          }
        });
        marker.addListener("click", function () {
          alert("마커가 클릭되었습니다!");
        });
      };

      map.addListener("click", function (event) {
        addMarker(event.latLng);
      });
    };

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
      ></div>
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
