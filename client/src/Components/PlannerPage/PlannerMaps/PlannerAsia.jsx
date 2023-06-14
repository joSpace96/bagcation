import React, { useEffect, useState } from "react";
import flag from "../images/free-icon-location-marker-nonclick.png";
import clickflag from "../images/free-icon-location-marker-click.png";
import nation from "../images/free-icon-map-777528.png";
import {
  PlannerDiary,
  PlannerDistance,
  PlannerHeader,
  PlannerInput,
} from "./PlannerAsiaSty";

const PlannerAsia = () => {
  const asiamarkers = [
    { position: { lat: 28.394857, lng: 84.124008 }, label: "네팔" },
    { position: { lat: 24.923014, lng: 121.246322 }, label: "대만" },
    { position: { lat: 35.907757, lng: 127.766922 }, label: "대한민국" },
    { position: { lat: 19.85627, lng: 102.495496 }, label: "라오스" },
    { position: { lat: 22.198745, lng: 113.543873 }, label: "마카오" },
    { position: { lat: 4.210484, lng: 101.975766 }, label: "말레이시아" },
    { position: { lat: 1.977247, lng: 73.5361034 }, label: "몰디브" },
    { position: { lat: 21.913965, lng: 95.956223 }, label: "미얀마(버마)" },
    { position: { lat: 14.058324, lng: 108.277199 }, label: "베트남" },
    { position: { lat: 7.873054, lng: 80.771797 }, label: "스리랑카" },
    { position: { lat: 1.352083, lng: 103.819836 }, label: "싱가포르" },
    { position: { lat: 23.424076, lng: 53.847818 }, label: "아랍에미리트" },
    { position: { lat: 20.593684, lng: 78.96288 }, label: "인도" },
    { position: { lat: -7.210832, lng: 110.851778 }, label: "인도네시아" },
    { position: { lat: 36.204824, lng: 138.252924 }, label: "일본" },
    { position: { lat: 32.86166, lng: 115.195397 }, label: "중국" },
    { position: { lat: 12.565679, lng: 104.990963 }, label: "캄보디아" },
    { position: { lat: 15.870032, lng: 100.992541 }, label: "태국" },
    { position: { lat: 12.879721, lng: 121.774017 }, label: "필리핀" },
    { position: { lat: 22.396428, lng: 114.109497 }, label: "홍콩" },
    // Add more markers here
  ];
  const kormarkers = [
    { position: { lat: 37.566535, lng: 126.9779692 }, label: "서울" },
    { position: { lat: 35.1795543, lng: 129.0756416 }, label: "부산" },
    { position: { lat: 33.4890113, lng: 126.4983023 }, label: "제주" },
    { position: { lat: 37.4562557, lng: 126.7052062 }, label: "인천" },
    { position: { lat: 36.3504119, lng: 127.3845475 }, label: "대전" },
    { position: { lat: 35.8714354, lng: 128.601445 }, label: "대구" },
    { position: { lat: 35.1595454, lng: 126.8526012 }, label: "광주" },
    { position: { lat: 35.5383773, lng: 129.3113596 }, label: "울산" },
    {
      position: { lat: 36.56561174, lng: 127.25826405 },
      label: "세종특별자치시",
    },
    { position: { lat: 37.4138, lng: 127.5183 }, label: "경기도" },
    { position: { lat: 37.8228, lng: 128.1555 }, label: "강원도" },
    { position: { lat: 36.5184, lng: 126.8 }, label: "충청도" },
    { position: { lat: 36.4919, lng: 128.8889 }, label: "경상북도" },
    { position: { lat: 35.4606, lng: 128.2132 }, label: "경상남도" },
    { position: { lat: 35.7175, lng: 127.153 }, label: "전라북도" },
    { position: { lat: 34.8679, lng: 126.991 }, label: "전라남도" },
  ];
  const jpnmarkers = [
    { position: { lat: 34.3401491, lng: 134.0434436 }, label: "가가와" },
    { position: { lat: 31.5601464, lng: 130.5579779 }, label: "가고시마" },
    { position: { lat: 35.320238, lng: 139.547983 }, label: "가마쿠라" },
    { position: { lat: 34.690083, lng: 135.1955112 }, label: "고베" },
    { position: { lat: 33.5597062, lng: 133.5310786 }, label: "고치" },
    { position: { lat: 35.0212466, lng: 135.7555968 }, label: "교토" },
    { position: { lat: 32.789827, lng: 130.7416672 }, label: "구마모토" },
    { position: { lat: 33.8834093, lng: 130.8752161 }, label: "기타큐슈" },
    { position: { lat: 35.3912272, lng: 136.7222906 }, label: "기후" },
    { position: { lat: 36.6512986, lng: 138.1809557 }, label: "나가노" },
    { position: { lat: 32.7448388, lng: 129.8737562 }, label: "나가사키" },
    { position: { lat: 35.1801883, lng: 136.9065647 }, label: "나고야" },
    { position: { lat: 34.6853345, lng: 135.8327421 }, label: "나라" },
    { position: { lat: 37.9025518, lng: 139.0230946 }, label: "니가타" },
    { position: { lat: 36.7199026, lng: 139.6982161 }, label: "닛코" },
    { position: { lat: 36.6952907, lng: 137.2113383 }, label: "도야마" },
    { position: { lat: 35.6894875, lng: 139.6917064 }, label: "도쿄" },
    { position: { lat: 34.0657179, lng: 134.5593601 }, label: "도쿠시마" },
    { position: { lat: 35.5038906, lng: 134.2377356 }, label: "돗토리" },
    { position: { lat: 31.9110956, lng: 131.4238934 }, label: "미야자키" },
    { position: { lat: 34.7302829, lng: 136.5085883 }, label: "미에" },
    { position: { lat: 43.0620958, lng: 141.3543763 }, label: "삿포로" },
    { position: { lat: 38.2688373, lng: 140.8721 }, label: "센다이" },
    { position: { lat: 35.4722952, lng: 133.0504997 }, label: "시마네" },
    { position: { lat: 34.9771201, lng: 138.3830845 }, label: "시즈오카" },
    { position: { lat: 40.822072, lng: 140.7473647 }, label: "아오모리" },
    { position: { lat: 39.7200079, lng: 140.1025642 }, label: "아키타" },
    { position: { lat: 38.2554388, lng: 140.3396017 }, label: "야마가타" },
    { position: { lat: 34.1859563, lng: 131.4706493 }, label: "야마구치" },
    { position: { lat: 35.6641575, lng: 138.5684486 }, label: "야마나시" },
    { position: { lat: 34.6862971, lng: 135.5196609 }, label: "오사카" },
    { position: { lat: 34.6617511, lng: 133.9344057 }, label: "오카야마" },
    { position: { lat: 26.34477289, lng: 127.80727447 }, label: "오키나와" },
    { position: { lat: 43.1907173, lng: 140.9946621 }, label: "오타루" },
    { position: { lat: 34.2259867, lng: 135.1675086 }, label: "와카야마" },
    { position: { lat: 35.4437078, lng: 139.6380256 }, label: "요코하마" },
    {
      position: { lat: 33.2381718, lng: 131.6126189 },
      label: "유후인(오이타)",
    },
    { position: { lat: 24.3406606, lng: 124.1555804 }, label: "이시가키지마" },
    { position: { lat: 36.5946816, lng: 136.6255726 }, label: "이시카와" },
    { position: { lat: 39.7036194, lng: 141.1526839 }, label: "이와테" },
    { position: { lat: 34.9765857, lng: 138.946704 }, label: "이즈" },
    { position: { lat: 35.2323553, lng: 139.1069375 }, label: "하코네" },
    { position: { lat: 41.7687933, lng: 140.7288103 }, label: "하코다테" },
    { position: { lat: 43.3421398, lng: 142.3832254 }, label: "후라노" },
    { position: { lat: 37.7502986, lng: 140.4675514 }, label: "후쿠시마" },
    { position: { lat: 33.6065756, lng: 130.418297 }, label: "후쿠오카" },
    { position: { lat: 34.3965603, lng: 132.4596225 }, label: "히로시마" },
  ];

  const [PlanMarkers, setPlanMarkers] = useState([]);
  const [lines, setLines] = useState(null);
  const [newMap, setNewMap] = useState(null);
  const [markerDistances, setMarkerDistances] = useState([]);
  const [clickedMarkers, setClickedMarkers] = useState([]);

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
    console.log("여행도시:", PlanMarkers);
  }, [PlanMarkers]);

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

  useEffect(() => {
    const Asiacenter = { lat: 20, lng: 90 };
    const defaultIcon = {
      url: nation,
      scaledSize: new window.google.maps.Size(35, 35),
    };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Asiacenter,
    });
    // 오리지널 구글맵 생성
    const OriginalMarkers = asiamarkers.map((markerData, index) => {
      return new window.google.maps.Marker({
        position: markerData.position,
        map: map,
        label: {
          text: markerData.label,
          color: " black",
          fontSize: "14px",
          fontWeight: "bold",
        },
        icon: defaultIcon, // markerIcons 배열에서 아이콘 선택
      });
    });
    // 아시아 마커의 클릭이벤트 선언
    OriginalMarkers.forEach((marker) => {
      marker.addListener("click", () => {
        handleMarkerClick(marker, map);
        OriginalMarkers.forEach((marker) => {
          marker.setVisible(false);
        });
      });
    });
  }, []);

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
  }, [PlanMarkers, lines]);

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
    const path = PlanMarkers.map((planMarker) => planMarker.position);

    // const newclickedmarker = new window.google.maps.Marker
    if (lines) {
      lines.setMap(null); // 이전 폴리라인을 지도에서 제거
    }
    const newLine = new window.google.maps.Polyline({
      path: path,
      map: map,
      strokeColor: "red",
      strokeWeight: 1,
    });

    if (clickedLabel === "대한민국" || clickedLabel === "일본") {
      let newMarkers = [];
      if (clickedLabel === "대한민국") {
        newMarkers = kormarkers;
      } else if (clickedLabel === "일본") {
        newMarkers = jpnmarkers;
      }
      const newGoogleMarkers = newMarkers.map((markerData) => {
        const isClicked = PlanMarkers.some(
          (planMarker) =>
            planMarker.position.lat === markerData.position.lat &&
            planMarker.position.lng === markerData.position.lng &&
            planMarker.label === markerData.label
        );
        const newMarker = new window.google.maps.Marker({
          position: markerData.position,
          map: map,
          label: {
            text: markerData.label,
            color: isClicked ? "black" : "gray",
            fontSize: "14px",
            fontWeight: "bold",
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
                position: {
                  lat: newMarker.getPosition().lat(),
                  lng: newMarker.getPosition().lng(),
                },
                label: newMarker.getLabel().text,
              },
            ]);
          }

          if (newMarker.isClicked) {
            newMarker.setIcon(defaultIcon);
            newMarker.getLabel().color = "gray";
            setPlanMarkers((prevMarkers) =>
              prevMarkers.filter(
                (markerData) =>
                  markerData.label !== newMarker.getLabel().text ||
                  markerData.position.lat !== newMarker.getPosition().lat() ||
                  markerData.position.lng !== newMarker.getPosition().lng()
              )
            );
          }

          console.log("고른마커", clickedLabel);
          console.log("가려질마크", clickedMarkers);
          newMarker.isClicked = !newMarker.isClicked;
          handleMarkerClick(newMarker, map);
        });
        return newMarker;
      });

      if (clickedLabel === "대한민국") {
        map.setZoom(7);
      } else if (clickedLabel === "일본") {
        map.setZoom(5);
      }

      newGoogleMarkers.forEach((marker) => {
        marker.setMap(map);
      });
      map.setCenter(marker.getPosition());
    } else {
      // Handle other cases
    }

    setNewMap(map);
    setLines(newLine);
  };

  const handleBack = () => {
    const Asiacenter = { lat: 20, lng: 90 };
    const nationIcon = {
      url: nation,
      scaledSize: new window.google.maps.Size(35, 35),
    };
    const clickedIcon = {
      url: clickflag,
      scaledSize: new window.google.maps.Size(40, 40),
    };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Asiacenter,
    });
    const OriginalMarkers = asiamarkers.map((markerData) => {
      return new window.google.maps.Marker({
        position: markerData.position,
        map: map,
        label: {
          text: markerData.label,
          color: "black",
          fontSize: "14px",
          fontWeight: "bold",
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
          color: "black",
          fontSize: "14px",
          fontWeight: "bold",
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
    map.setZoom(4);
    map.setCenter(Asiacenter);
    OriginalMarkers.forEach((marker) => {
      marker.addListener("click", () => {
        handleMarkerClick(marker, map);
        OriginalMarkers.forEach((marker) => {
          marker.setVisible(false);
        });
        // 클릭마커를 해당국가에서는 제거해주는 조건문 (******)
        if (marker?.getLabel().text === "대한민국") {
          ClickedMarkers.forEach((clickedMarker) => {
            const OverlapMarkers = kormarkers.some((kormarker) => {
              return (
                kormarker.position.lat === clickedMarker.getPosition().lat() &&
                kormarker.position.lng === clickedMarker.getPosition().lng() &&
                kormarker.label === clickedMarker.getLabel().text
              );
            });
            if (OverlapMarkers) {
              clickedMarker.setVisible(false);
            }
          });
        }
        if (marker?.getLabel().text === "일본") {
          ClickedMarkers.forEach((clickedMarker) => {
            const OverlapMarkers = jpnmarkers.some((kormarker) => {
              return (
                kormarker.position.lat === clickedMarker.getPosition().lat() &&
                kormarker.position.lng === clickedMarker.getPosition().lng() &&
                kormarker.label === clickedMarker.getLabel().text
              );
            });
            if (OverlapMarkers) {
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

  return (
    <>
      <div id="map" style={{ height: "93vh", width: "90%" }}></div>
      <PlannerDiary>
        <PlannerHeader>
          <span
            class="material-symbols-outlined"
            onClick={() => handleBack(PlanMarkers)}
          >
            undo
          </span>
          <div>여행도시</div>
        </PlannerHeader>
        <div>
          <div>
            {PlanMarkers.map((item, index) => (
              <div
                key={item.label}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, index)}
              >
                <PlannerInput
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, index)}
                >
                  <div style={{ marginLeft: "35%" }}>{item.label}</div>
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
      </PlannerDiary>
    </>
  );
};

export default PlannerAsia;
