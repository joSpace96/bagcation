import React, { useEffect, useState } from "react";
import flag from "../images/free-icon-location-marker-nonclick.png";
import clickflag from "../images/free-icon-location-marker-click.png";
import nation from "../images/free-icon-map-777528.png";
import {
  AmericaButton,
  AsiaButton,
  ContinentButton,
  DateButton,
  DatePickerWrapper,
  DetailButton,
  EuropeButton,
  OceaniaButton,
  PlannerDiary,
  PlannerDistance,
  PlannerHeader,
  PlannerInput,
} from "./PlannerAsiaSty";
import axios from "axios";
import apiServer from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import TitleModal from "./TitleModal";

const PlannerAsia = () => {
  const [PlanMarkers, setPlanMarkers] = useState([]);
  const [lines, setLines] = useState(null);
  const [newMap, setNewMap] = useState(null);
  const [markerDistances, setMarkerDistances] = useState([]);
  const [clickedMarkers, setClickedMarkers] = useState([]);
  const [asiaMarkers, setAsiaMarkers] = useState([]);
  const [oceaniaMarkers, setOceaniaMarkers] = useState([]);
  const [europeMarkers, setEuropeMarkers] = useState([]);
  const [americaMarkers, setAmericaMarkers] = useState([]);
  const [citiesMarkers, setCitiesMarkers] = useState([]);
  const [nationMarkers, setNationMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 20, lng: 90 });
  const [zoom, setZoom] = useState(4);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [durations, setDurations] = useState([]);
  const [DateOk, setDateOk] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentDate = new Date();
  const navigate = useNavigate();
  console.log(PlanMarkers);

  // 출발일 선택 이벤트 처리

  const defaultIcon = {
    url: flag,
    scaledSize: new window.google.maps.Size(35, 35),
  };
  const clickedIcon = {
    url: clickflag,
    scaledSize: new window.google.maps.Size(40, 40),
  };
  const arrowHeads = []; // 화살표를 저장할 배열을 생성
  useEffect(() => {
    setDurations(Array(PlanMarkers.length).fill(1));
  }, [PlanMarkers]);
  useEffect(() => {
    try {
      axios.get(`${apiServer}/map/getNation`).then((response) => {
        const data = response.data;
        const asiaNations = data.filter((nation) => nation.continent === "as");
        const asiaMarker = asiaNations.map((nation) => ({
          position: { lat: nation.lat, lng: nation.lng },
          label: nation.nation,
        }));

        const euNations = data.filter((nation) => nation.continent === "eu");
        const europeMarker = euNations.map((nation) => ({
          position: { lat: nation.lat, lng: nation.lng },
          label: nation.nation,
        }));
        const ocNations = data.filter((nation) => nation.continent === "oc");
        const oceaniaMarker = ocNations.map((nation) => ({
          position: { lat: nation.lat, lng: nation.lng },
          label: nation.nation,
        }));

        const amNations = data.filter((nation) => nation.continent === "am");
        const americaMarker = amNations.map((nation) => ({
          position: { lat: nation.lat, lng: nation.lng },
          label: nation.nation,
        }));

        setAsiaMarkers(asiaMarker);
        setEuropeMarkers(europeMarker);
        setAmericaMarkers(americaMarker);
        setOceaniaMarkers(oceaniaMarker);
        setNationMarkers(asiaMarker);
      });

      axios.get(`${apiServer}/map/getCity`).then((response) => {
        const data = response.data;
        setCitiesMarkers(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    const nationIcon = {
      url: nation,
      scaledSize: new window.google.maps.Size(35, 35),
    };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: zoom,
      center: center,
    });
    const OriginalMarkers = nationMarkers.map((markerData) => {
      return new window.google.maps.Marker({
        position: markerData.position,
        map: map,
        label: {
          text: markerData.label,
          className: "markwithlabel",
        },
        icon: nationIcon,
      });
    });
    const ClickedMarkers = PlanMarkers.map((markerData) => {
      return new window.google.maps.Marker({
        position: markerData.position,
        map: map,
        label: {
          text: markerData.label,
          className: "markwithlabel",
        },
        icon: clickedIcon,
        isClicked: true,
      });
    });
    setClickedMarkers(ClickedMarkers);

    if (lines) {
      lines.setMap(null); // 이전 폴리라인을 제거
    }

    if (PlanMarkers.length > 1) {
      const path = PlanMarkers.map((planMarker) => planMarker.position);
      const newline = new window.google.maps.Polyline({
        path: path,
        map: map,
        strokeColor: "red",
        strokeWeight: 1,
      });
      setLines(newline);
    }

    // 아시아 마커의 클릭 이벤트 선언
    OriginalMarkers.forEach((marker) => {
      marker.addListener("click", () => {
        handleMarkerClick(marker, map);
        OriginalMarkers.forEach((marker) => {
          marker.setVisible(false);
        });
      });
    });
    setNewMap(map);
  }, [nationMarkers, center]);

  const cityMarker = citiesMarkers.map((city) => ({
    position: { lat: city.lat, lng: city.lng },
    label: city.city,
    nation: city.nation,
  }));

  // 대륙변경버튼 함수
  const handleAsia = () => {
    setNationMarkers(asiaMarkers);
    setCenter({ lat: 20, lng: 90 });
    setZoom(4);
  };

  const handleEurope = () => {
    setNationMarkers(europeMarkers);
    setCenter({ lat: 52, lng: 10 });
    setZoom(4);
  };
  const handleAmerica = () => {
    setNationMarkers(americaMarkers);
    setCenter({ lat: 10, lng: -95 });
    setZoom(3);
  };
  const handleOceania = () => {
    setNationMarkers(oceaniaMarkers);
    setCenter({ lat: -10, lng: 160 });
    setZoom(3.5);
  };

  // 폴리라인 방향에 따라 화살표를 그리는 함수
  const drawArrowsOnPolyline = (polyline) => {
    removeArrowHeads(); // 기존의 화살표를 제거
    const path = polyline.getPath();
    const arrowSymbol = {
      path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    };

    for (let i = 0; i < path.getLength() - 1; i++) {
      const startPoint = path.getAt(i);
      const endPoint = path.getAt(i + 1);

      const arrowHeadPositions = getArrowHeadPositions(startPoint, endPoint);
      const arrowHeadLine = new window.google.maps.Polyline({
        path: arrowHeadPositions,
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 1,
        icons: [
          {
            icon: arrowSymbol,
            offset: "50%",
          },
        ],
        map: polyline.getMap(),
      });

      arrowHeads.push(arrowHeadLine); // 생성된 화살표를 배열에 저장
    }
  };
  const removeArrowHeads = () => {
    if (arrowHeads && arrowHeads.length > 0) {
      arrowHeads.forEach((arrowHead) => {
        arrowHead.setMap(null);
      });
    }
  };
  const getArrowHeadPositions = (startPoint, endPoint) => {
    const arrowHeadPositions = [];
    const numArrowHeads = 100;

    for (let i = 0; i <= numArrowHeads; i++) {
      const fraction = i / numArrowHeads;
      const arrowHeadPosition =
        window.google.maps.geometry.spherical.interpolate(
          startPoint,
          endPoint,
          fraction
        );
      arrowHeadPositions.push(arrowHeadPosition);
    }

    return arrowHeadPositions;
  };
  // 화살표 제거 함수

  // 폴리라인 변경시 실시간 렌더링 코드
  useEffect(() => {
    if (PlanMarkers.length > 1) {
      const path = PlanMarkers.map((planMarker) => planMarker.position);
      if (lines) {
        lines.setMap(null); // 이전 폴리라인을 지도에서 제거
      }

      const newLine = new window.google.maps.Polyline({
        path: path,
        map: newMap,
        strokeOpacity: 0,
        strokeColor: "red",
        strokeWeight: 1,
      });

      newLine.getPath().forEach((point, index) => {
        drawArrowsOnPolyline(newLine); // 폴리라인 위에 화살표 생성
      });

      return () => {
        newLine.setMap(null); // 컴포넌트가 언마운트되면 폴리라인을 제거
        removeArrowHeads(); // 컴포넌트가 언마운트되면 화살표도 제거
      };
    } else {
      if (lines) {
        lines.setMap(null); // 이전 폴리라인을 지도에서 제거
        removeArrowHeads(); // 폴리라인이 사라지면 화살표도 제거
      }
    }
  }, [nationMarkers, PlanMarkers, lines]);

  // 거리 데이터 실시간 렌더링 코드
  useEffect(() => {
    if (PlanMarkers.length >= 2) {
      const distances = [];

      for (let i = 0; i < PlanMarkers.length - 1; i++) {
        const distance =
          window.google.maps.geometry.spherical.computeDistanceBetween(
            PlanMarkers[i].position,
            PlanMarkers[i + 1].position
          );

        distances.push(distance);
      }
      setMarkerDistances(distances);
    }
  }, [PlanMarkers]);

  // 마커클릭이벤트 함수

  const handleMarkerClick = (marker, map) => {
    const clickedLabel = marker?.getLabel().text;
    const newMarkers = citiesMarkers
      .filter((city) => city.nation === clickedLabel)
      .map((city) => ({
        position: { lat: city.lat, lng: city.lng },
        label: city.city,
        nation: city.nation,
      }));
    const path = PlanMarkers.map((planMarker) => planMarker.position);

    if (lines) {
      lines.setMap(null);
    }
    const newLine = new window.google.maps.Polyline({
      path: path,
      map: map,
      strokeColor: "red",
      strokeWeight: 1,
    });

    const newGoogleMarkers = newMarkers.map((markerData) => {
      const isClicked = PlanMarkers.some(
        (planMarker) =>
          planMarker.position.lat === markerData.position.lat &&
          planMarker.position.lng === markerData.position.lng
      );
      const labelColor = isClicked ? "black" : "gray";
      const markerPosition = markerData.position;
      const markerNation = markerData.nation;
      const newMarker = new window.google.maps.Marker({
        position: markerPosition,
        map: map,
        label: {
          text: markerData.label,
          color: labelColor,
          className: "markwithlabel",
        },
        icon: isClicked ? clickedIcon : defaultIcon,
        isClicked: isClicked,
      });

      newMarker.addListener("click", () => {
        if (!newMarker.isClicked) {
          newMarker.setIcon(clickedIcon);
          newMarker.getLabel().color = "black";
          setPlanMarkers((prevMarkers) => [
            ...prevMarkers,
            {
              position: markerPosition,
              label: newMarker.getLabel().text,
              nation: markerNation,
            },
          ]);
        } else {
          newMarker.setIcon(defaultIcon);
          newMarker.getLabel().color = "gray";
          setPlanMarkers((prevMarkers) =>
            prevMarkers.filter(
              (markerData) =>
                markerData.position.lat !== markerPosition.lat ||
                markerData.position.lng !== markerPosition.lng
            )
          );
        }

        newMarker.isClicked = !newMarker.isClicked;
        handleMarkerClick(newMarker, map);
      });
      console.log(newMarkers);
      return newMarker;
    });

    if (clickedLabel === "러시아" || clickedLabel === "미국") {
      map.setZoom(3);
    } else if (
      clickedLabel === "오스트레일리아" ||
      clickedLabel === "아르헨티나" ||
      clickedLabel === "칠레" ||
      clickedLabel === "캐나다"
    ) {
      map.setZoom(4);
    } else if (
      clickedLabel === "중국" ||
      clickedLabel === "멕시코" ||
      clickedLabel === "핀란드" ||
      clickedLabel === "노르웨이" ||
      clickedLabel === "스웨덴" ||
      clickedLabel === "브라질" ||
      clickedLabel === "인도" ||
      clickedLabel === "일본"
    ) {
      map.setZoom(5);
    } else if (
      clickedLabel === "인도네시아" ||
      clickedLabel === "포르투갈" ||
      clickedLabel === "스페인" ||
      clickedLabel === "프랑스" ||
      clickedLabel === "이탈리아" ||
      clickedLabel === "영국" ||
      clickedLabel === "뉴질랜드" ||
      clickedLabel === "페루" ||
      clickedLabel === "콜롬비아" ||
      clickedLabel === "태국" ||
      clickedLabel === "베트남" ||
      clickedLabel === "미얀마" ||
      clickedLabel === "필리핀"
    ) {
      map.setZoom(6);
    } else {
      map.setZoom(7);
    }

    newGoogleMarkers.forEach((marker) => {
      marker.setMap(map);
    });
    map.setCenter(marker.getPosition());

    setNewMap(map);
    setLines(newLine);
    console.log("고른마커", clickedLabel);
  };

  const handleBack = () => {
    const nationIcon = {
      url: nation,
      scaledSize: new window.google.maps.Size(35, 35),
    };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: zoom,
      center: center,
    });
    const OriginalMarkers = nationMarkers.map((markerData) => {
      return new window.google.maps.Marker({
        position: markerData.position,
        map: map,
        label: {
          text: markerData.label,
          className: "markwithlabel",
        },
        icon: nationIcon,
      });
    });
    const ClickedMarkers = PlanMarkers.map((markerData) => {
      return new window.google.maps.Marker({
        position: markerData.position,
        map: map,
        label: {
          text: markerData.label,
          className: "markwithlabel",
        },
        icon: clickedIcon,
        isClicked: true,
      });
    });
    setClickedMarkers(ClickedMarkers);

    if (lines) {
      lines.setMap(null); // 이전 폴리라인을 제거
    }

    if (PlanMarkers.length > 1) {
      const path = PlanMarkers.map((planMarker) => planMarker.position);
      const newline = new window.google.maps.Polyline({
        path: path,
        map: map,
        strokeColor: "red",
        strokeWeight: 1,
      });
      setLines(newline);
      map.setZoom(4);
      map.setCenter({ lat: 20, lng: 90 });
    }

    // 원래의 마커들을 다시 보이도록 설정
    OriginalMarkers.forEach((marker) => {
      marker.setVisible(true);
    });

    // 맵의 줌 레벨과 중심 위치를 초기 값으로 되돌림
    map.setZoom(zoom);
    map.setCenter(center);
    OriginalMarkers.forEach((marker) => {
      marker.addListener("click", () => {
        handleMarkerClick(marker, map);
        OriginalMarkers.forEach((marker) => {
          marker.setVisible(false);
        });
        // 클릭마커를 해당국가에서는 제거해주는 조건문 (******)
        if (ClickedMarkers) {
          const selectedMarker = citiesMarkers
            .filter((city) => city.nation === marker?.getLabel().text)
            .map((city) => ({
              position: { lat: city.lat, lng: city.lng },
              label: city.city,
            }));
          ClickedMarkers.forEach((clickedMarker) => {
            const isOverlapMarker = selectedMarker.some((city) => {
              return (
                city.position.lat === clickedMarker.getPosition().lat() &&
                city.position.lng === clickedMarker.getPosition().lng() &&
                city.label === clickedMarker.getLabel().text
              );
            });
            if (isOverlapMarker) {
              clickedMarker.setVisible(false);
            }
          });
        }
      });
    });
    setNewMap(map);
  };

  // 드래그 앤 드롭 시작
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
    const draggedElement = e.target;
    draggedElement.style.opacity = "1";
  };
  // 드롭 이벤트 핸들러
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const draggedElement = document.getElementById(dragIndex);

    // 드래그된 마커의 인덱스와 드롭된 마커의 인덱스를 기반으로 PlanMarkers의 순서를 변경
    const updatedMarkers = [...PlanMarkers];
    const [draggedMarker] = updatedMarkers.splice(dragIndex, 1);
    updatedMarkers.splice(dropIndex, 0, draggedMarker);

    setPlanMarkers(updatedMarkers);
  };

  const handleDateChange = (date) => {
    if (date) {
      setStartDate(date);
      setIsDatePickerOpen(false);
      setDateOk(true);
    } else {
      console.error("출발일을 선택해주세요.");
    }
  };

  // 세부 일정 짜기로 진행하는 함수
  const handleDetailClick = () => {
    setIsModalOpen(true);
  };
  const handleModalSubmit = (title) => {
    if (!startDate) {
      alert("출발일을 정해주세요.");
    }
    setIsModalOpen(false);
    navigate("/planner/map/detail", {
      state: {
        markers: PlanMarkers,
        startDate: startDate,
        durations: durations,
        title: title,
      },
    });
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    // 취소 처리
  };

  const handleIncreaseDuration = (index) => {
    setDurations((prevDurations) => {
      const newDurations = [...prevDurations];
      newDurations[index] = newDurations[index] + 1;
      return newDurations;
    });
  };

  const handleDecreaseDuration = (index) => {
    setDurations((prevDurations) => {
      const newDurations = [...prevDurations];
      if (newDurations[index] > 1) {
        newDurations[index] = newDurations[index] - 1;
      }
      return newDurations;
    });
  };

  return (
    <>
      <div id="map" style={{ height: "92vh", width: "90%" }}></div>
      <PlannerDiary>
        <PlannerHeader>
          <div style={{ marginLeft: "20%", fontSize: "14px" }}>여행도시</div>
          <div>
            <ReactDatePicker
              selected={startDate}
              onChange={handleDateChange}
              onFocus={() => setIsDatePickerOpen(true)}
              onClickOutside={() => setIsDatePickerOpen(false)}
              minDate={currentDate}
              customInput={
                <div
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {startDate ? (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsDatePickerOpen(true)}
                    >
                      {startDate.toLocaleDateString()}
                    </p>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsDatePickerOpen(true)}
                    >
                      출발일
                    </p>
                  )}
                  <span
                    style={{ position: "relative", top: "10px", left: "5px" }}
                    class="material-symbols-outlined"
                    onClick={() => setIsDatePickerOpen(true)}
                  >
                    calendar_month
                  </span>
                </div>
              }
              open={isDatePickerOpen}
            />
          </div>
        </PlannerHeader>
        <div>
          <ContinentButton>
            <span
              onClick={() => handleBack(PlanMarkers)}
              style={{
                margin: "23px",
                marginLeft: "28px",
                float: "top",
                cursor: "pointer",
                zIndex: 2,
                color: "white",
              }}
              class="material-symbols-outlined"
            >
              undo
            </span>
            <AsiaButton onClick={handleAsia}>
              <div>아시아</div>
            </AsiaButton>

            <EuropeButton onClick={handleEurope}>
              <div>유럽</div>
            </EuropeButton>

            <AmericaButton onClick={handleAmerica}>
              <div>아메리카</div>
            </AmericaButton>

            <OceaniaButton onClick={handleOceania}>
              <div>남태평양</div>
            </OceaniaButton>
          </ContinentButton>
          <div
            style={{
              position: "relative",
              top: "90px",
              overflowX: "hidden",
              overflowY: "scroll",
              height: "80vh",
            }}
          >
            {PlanMarkers.map((item, index) => (
              <div
                key={item.label}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, index)}
              >
                <PlannerInput
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, index)}
                  style={{ justifyContent: "center" }}
                >
                  <div>
                    {item.label}
                    <button
                      style={{ marginLeft: "15px" }}
                      onClick={() => handleDecreaseDuration(index)}
                    >
                      -
                    </button>
                    <span>{durations[index]}일</span>
                    <button onClick={() => handleIncreaseDuration(index)}>
                      +
                    </button>
                  </div>
                </PlannerInput>
                {index < markerDistances.length && (
                  <PlannerDistance>
                    <span class="material-symbols-outlined">more_vert</span>
                    <span
                      style={{
                        marginLeft: "-10px",
                        color: "orange",
                        marginRight: "15px",
                      }}
                      class="material-symbols-outlined"
                    >
                      arrow_forward
                    </span>
                    {(markerDistances[index] / 1000).toFixed(2)} km
                  </PlannerDistance>
                )}
              </div>
            ))}
          </div>
        </div>
        <DetailButton onClick={handleDetailClick}>세부일정 짜기</DetailButton>
        {isModalOpen && (
          <TitleModal
            onSubmit={handleModalSubmit}
            onCancel={handleModalCancel}
            startDate={startDate}
          />
        )}
      </PlannerDiary>
    </>
  );
};

export default PlannerAsia;
