import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
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
  const [center, setCenter] = useState("");
  console.log("건네받은 데이터: ", location.state);
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: center,
    });
  }, []);

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

    event.preventDefault(); // 드래그 동작 시에는 기본 텍스트 선택 동작을 막음

    const deltaY = event.clientY - startY;
    scrollContainerRef.current.scrollTop = startScrollTop - deltaY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleTaskClick = (index, task) => {
    setSelectedTaskIndex(index);
    setCenter(index.positon);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TodoContainer>
        <TodoHeader>
          <h2>여행 투두리스트</h2>
          <p>출발일: {startDate.toLocaleDateString()}</p>
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
                <p className="date">{task.date}</p>
                <p className="location">
                  {task.location} - {task.nation}
                </p>
              </div>
            </div>
          ))}
        </TodoList>
      </TodoContainer>
      <TodoMemoContainer>dd</TodoMemoContainer>
      <div id="map" style={{ height: "868px", width: "90%" }}></div>
    </div>
  );
};
export default PlannerDetail;
