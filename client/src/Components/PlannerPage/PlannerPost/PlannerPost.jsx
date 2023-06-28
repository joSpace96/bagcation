import React, { useEffect, useState } from "react";
import axios from "axios";
import apiServer from "./../../../api/api";
import clickflag from "../images/free-icon-location-marker-click.png";
import {
  PlannerPostContainer,
  PostHeader,
  PostListItem,
  PostScheduleItems,
  PostScheduleList,
  PostScheduleMap,
  PostTitle,
  PostTravelLocations,
} from "./PlannerPostSty";
import "./Scroll.css";
import { LikeButton } from "./../../BoardPage/BoardList/BoardListSty";

const PlannerPost = () => {
  const [postData, setPostData] = useState();
  const [travelLocation, setTravelLocation] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [lines, setLines] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [likeCount, setLikeCount] = useState("");

  const url = document.location.href;
  const splitUrl = url.split("/");
  const location = splitUrl[splitUrl.length - 1];

  const clickedIcon = {
    url: clickflag,
    scaledSize: new window.google.maps.Size(40, 40),
  };

  const MyId = localStorage.getItem("idx");
  const handleLike = () => {
    const likeData = {
      userIdx: MyId,
      planIdx: location,
    };
    axios
      .post(`${apiServer}/plans/plan_like`, likeData)
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data.message === "Plan liked successfully") {
          alert("좋아요가 등록되었습니다.");
          setLikeCount((prevCount) => prevCount + 1); // 좋아요 수 증가
        }
        if (data.message === "Plan like removed successfully") {
          alert("좋아요가 해제되었습니다.");
          setLikeCount((prevCount) => prevCount - 1); // 좋아요 수 감소
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    try {
      axios
        .get(`${apiServer}/plans/get_plan?idx=${location}`)
        .then((response) => {
          const data = response.data.post;
          console.log("data:", data);
          setPostData(data);
          setScheduleData(data.planSchedules);
          setTravelLocation(data.travelNations);
          setRoutes(
            data.travelNations.map((route) => ({
              position: { lat: route.lat, lng: route.lng },
              label: route.city,
            }))
          );

          setLikeCount(data.likecount); // 좋아요 수 업데이트
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    console.log(likeCount, "좋아요 수가 변경되었습니다.");
  }, [likeCount]);

  useEffect(() => {
    if (routes.length > 0 && window.google) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 6.5,
        center: routes[0].position,
      });
      const travelMarker = routes.map((markerData) => {
        return new window.google.maps.Marker({
          position: markerData.position,
          map: map,
          label: {
            text: markerData.label,
            className: "markwithlabel",
          },
          icon: clickedIcon,
        });
      });
      if (lines) {
        lines.setMap(null);
      }

      if (routes.length > 1) {
        const path = routes.map((planMarker) => planMarker.position);
        const newline = new window.google.maps.Polyline({
          path: path,
          map: map,
          strokeColor: "red",
          strokeWeight: 0.5,
        });
        setLines(newline);
      }
    }
  }, [routes]);

  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <PlannerPostContainer>
        {postData && (
          <PostHeader>
            <div style={{ marginBottom: "2px" }}>
              {postData.title} / {postData.theme}
            </div>
            <div>{postData.period}</div>
            <span
              style={{ cursor: "pointer" }}
              onClick={handleLike}
              class="material-symbols-outlined"
            >
              favorite
            </span>
            <span>{likeCount}</span>
          </PostHeader>
        )}
        <PostTravelLocations className="scroll-content">
          {[...new Set(routes.map((route) => route.label))].map(
            (label, index) => (
              <span
                style={{
                  width: "max-content",
                }}
                key={index}
              >
                <PostListItem>
                  {label}
                  <span
                    style={{
                      height: "50px",
                      position: "relative",
                      left: "3px",
                      top: "4px",
                      color: "orange",
                      backgroundColor: "white",
                    }}
                    className="material-symbols-outlined"
                  >
                    arrow_forward
                  </span>
                </PostListItem>
              </span>
            )
          )}
        </PostTravelLocations>
        <div
          style={{
            border: "none",
            width: "400px",
            textAlign: "center",
            fontWeight: "bold",
            padding: "5px",
            marginLeft: "75px",
          }}
        >
          스케쥴
        </div>
        <div style={{ display: "flex" }}>
          <PostScheduleList>
            {scheduleData.map((schedule, index) => (
              <PostScheduleItems
                className="scroll-content"
                key={index}
                onClick={() => toggleItem(index)}
                expanded={expandedIndex === index}
              >
                <div>{schedule.city}</div>
                <div>{schedule.datetime}</div>
                {expandedIndex === index && (
                  <div>
                    {schedule.time} : {schedule.content}
                  </div>
                )}
              </PostScheduleItems>
            ))}
          </PostScheduleList>
          <PostScheduleMap id="map" />
        </div>
      </PlannerPostContainer>
    </div>
  );
};

export default PlannerPost;
