import React, { useState } from "react";
import {
  LedgerBillContainer,
  LedgerContainer,
  LedgerInputButton,
  LedgerInputContainer,
  Overlay,
  OverlayContent,
} from "./LedgerSty";
import LedgerDetail from "./LedgerDetailPage/LedgerDetail";
import { LedgerAddSubmit } from "./LedgerDetailPage/LedgerDetailSty";

const Ledger = () => {
  const [OverlayVisible, setOverlayVisible] = useState(false);

  const showOverlay = () => {
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);
  };
  return (
    <LedgerContainer>
      <LedgerBillContainer />
      <LedgerInputContainer>
        <LedgerInputButton onClick={showOverlay}>
          계획 추가하기
        </LedgerInputButton>
      </LedgerInputContainer>

      {OverlayVisible && (
        <Overlay>
          <OverlayContent>
            <LedgerDetail />
            <LedgerAddSubmit onClick={hideOverlay}>추가하기</LedgerAddSubmit>
          </OverlayContent>
        </Overlay>
      )}
    </LedgerContainer>
  );
};

export default Ledger;
