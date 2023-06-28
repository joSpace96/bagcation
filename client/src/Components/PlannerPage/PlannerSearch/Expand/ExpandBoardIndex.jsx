import React, { useState } from "react";
import { Expend, ExpendIndex } from "./ExpandAsiaSty";
import ExpandBoardAsia from "./ExpandBoard/ExpandBoardAsia";
import ExpandBoardEurope from "./ExpandBoard/ExpandBoardEurope";
import ExpandBoardAmerica from "./ExpandBoard/ExpandBoardAmerica";
import ExpandBoardOceania from "./ExpandBoard/ExpandBoardOceania";

const ExpandBoardIndex = ({ expand, setSelectedDestination }) => {
  const [content, setContent] = useState(<ExpandBoardAsia />);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <Expend expand={expand}>
      <ExpendIndex>
        <span
          style={{
            color: content.type === ExpandBoardAsia ? "#7bc0f9" : "black",
            borderBottom:
              content.type === ExpandBoardAsia ? "3px solid #7bc0f9" : "none",
            cursor: "pointer",
          }}
          onClick={() =>
            handleContentChange(
              <ExpandBoardAsia
                setSelectedDestination={setSelectedDestination}
              />
            )
          }
        >
          아시아
        </span>
        <span
          style={{
            color: content.type === ExpandBoardEurope ? "#7bc0f9" : "black",
            borderBottom:
              content.type === ExpandBoardEurope ? "3px solid #7bc0f9" : "none",
            cursor: "pointer",
          }}
          onClick={() =>
            handleContentChange(
              <ExpandBoardEurope
                setSelectedDestination={setSelectedDestination}
              />
            )
          }
        >
          유럽
        </span>
        <span
          style={{
            color: content.type === ExpandBoardAmerica ? "#7bc0f9" : "black",
            borderBottom:
              content.type === ExpandBoardAmerica
                ? "3px solid #7bc0f9"
                : "none",
            cursor: "pointer",
          }}
          onClick={() =>
            handleContentChange(
              <ExpandBoardAmerica
                setSelectedDestination={setSelectedDestination}
              />
            )
          }
        >
          아메리카
        </span>
        <span
          style={{
            color: content.type === ExpandBoardOceania ? "#7bc0f9" : "black",
            borderBottom:
              content.type === ExpandBoardOceania
                ? "3px solid #7bc0f9"
                : "none",
            cursor: "pointer",
          }}
          onClick={() =>
            handleContentChange(
              <ExpandBoardOceania
                setSelectedDestination={setSelectedDestination}
              />
            )
          }
        >
          남태평양
        </span>
      </ExpendIndex>
      {content}
    </Expend>
  );
};

export default ExpandBoardIndex;
