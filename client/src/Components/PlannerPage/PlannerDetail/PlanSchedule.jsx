import React, { useEffect, useState } from "react";
import {
  AddSchedulContainer,
  ScheduleContainer,
  ScheduleList,
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledListItem,
  StyledTextarea,
} from "./PlanScheduleSty";
import "./PlannerDetail.css";

const PlanSchedule = ({
  taskdate,
  tasklocal,
  task,
  selectedTask,
  setSelectedTask,
}) => {
  const [scheduleItems, setScheduleItems] = useState(
    selectedTask?.schedule || []
  );
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTime2, setSelectedTime2] = useState("");
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(taskdate);
  const [selectedLocal, setSelectedLocal] = useState(tasklocal);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    setSelectedLocal(tasklocal);
    setSelectedDate(taskdate);
    setSelectedItemIndex(null);
    setContent("");
  }, [tasklocal, taskdate]);

  useEffect(() => {
    if (selectedTask) {
      setScheduleItems(selectedTask.schedule || []);
    }
  }, [selectedTask]);

  const addSchedule = () => {
    const newScheduleItem = {
      location: selectedLocal,
      datetime: selectedDate,
      time: selectedTime + "~" + selectedTime2,
      content,
    };

    const updatedScheduleItems = [...scheduleItems, newScheduleItem];
    const updatedTask = {
      ...selectedTask,
      schedule: updatedScheduleItems,
    };

    setScheduleItems(updatedScheduleItems);
    setSelectedTask(updatedTask);

    setSelectedTime("");
    setSelectedTime2("");
    setContent("");
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleTimeChange2 = (event) => {
    setSelectedTime2(event.target.value);
  };

  const handleItemClick = (index) => {
    if (selectedItemIndex === index) {
      setSelectedLocal("");
      setSelectedDate("");
      setSelectedItemIndex(null);
      setSelectedTime("");
      setSelectedTime2("");
      setContent("");
    } else {
      const clickedItem = scheduleItems[index];

      setSelectedItemIndex(index);
      const { location, datetime, time, content } = clickedItem;
      setSelectedLocal(location);
      setSelectedDate(datetime);
      const [selectedTime, selectedTime2] = time.split("~");
      setSelectedTime(selectedTime);
      setSelectedTime2(selectedTime2);
      setContent(content);
    }
  };

  const handleEdit = () => {
    if (selectedItemIndex === null) return;

    const selectedTimeRange = selectedTime + "~" + selectedTime2;

    const updatedScheduleItems = scheduleItems.map((schedule, index) => {
      if (
        schedule.location === selectedLocal &&
        schedule.datetime === selectedDate &&
        index === selectedItemIndex
      ) {
        return {
          ...schedule,
          time: selectedTimeRange,
          content,
        };
      }
      return schedule;
    });

    const updatedTask = {
      ...selectedTask,
      schedule: updatedScheduleItems,
    };

    setScheduleItems(updatedScheduleItems);
    setSelectedTask(updatedTask);

    setSelectedItemIndex(null);
    setSelectedTime("");
    setSelectedTime2("");
    setContent("");
  };

  const handleDelete = () => {
    if (selectedItemIndex === null) return;

    const updatedScheduleItems = [...scheduleItems];
    updatedScheduleItems.splice(selectedItemIndex, 1);

    const updatedTask = {
      ...selectedTask,
      schedule: updatedScheduleItems,
    };

    setScheduleItems(updatedScheduleItems);
    setSelectedTask(updatedTask);

    setSelectedItemIndex(null);
    setSelectedTime("");
    setSelectedTime2("");
    setContent("");
  };
  const selectedTaskSchedule =
    task.filter(
      (item) =>
        item.location === selectedTask?.location &&
        item.date === selectedTask?.date
    )[0]?.schedule || [];
  const groupedSchedule = {};
  task.forEach((item) => {
    const { location, schedule } = item;
    if (!groupedSchedule[location]) {
      groupedSchedule[location] = [];
    }
    if (item.date === selectedTask?.date) {
      groupedSchedule[location] = groupedSchedule[location].concat(schedule);
    }
  });
  selectedTaskSchedule.sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );

  return (
    <div>
      <ScheduleContainer>
        <ScheduleList className="scroll-content">
          {selectedTaskSchedule.map((schedule, index) => (
            <StyledListItem
              key={index}
              hasContent={schedule.content !== ""}
              isSelected={selectedItemIndex === index}
              onClick={() => handleItemClick(index)}
            >
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {schedule.location}
                  <br />
                  {schedule.datetime}
                </div>
              </div>
              <div></div>
              <div>{schedule.time}</div>
              <div>{schedule.content}</div>
            </StyledListItem>
          ))}
        </ScheduleList>
      </ScheduleContainer>

      <AddSchedulContainer>
        <StyledDiv>{selectedLocal}</StyledDiv>
        <div>
          <strong style={{ marginRight: "10px" }}>{selectedDate}</strong>
          <input type="time" value={selectedTime} onChange={handleTimeChange} />
          ~
          <input
            type="time"
            value={selectedTime2}
            onChange={handleTimeChange2}
          />
        </div>
        <StyledTextarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {selectedItemIndex === null ? (
          <StyledButton onClick={addSchedule}>일정 추가</StyledButton>
        ) : (
          <>
            <StyledButton onClick={handleEdit}>수정</StyledButton>
            <StyledButton onClick={handleDelete}>삭제</StyledButton>
          </>
        )}
      </AddSchedulContainer>
    </div>
  );
};

export default PlanSchedule;
