import React, { useState } from "react";
import {
  BillTarget,
  InputMoney,
  LedgerAddContainer,
  LedgerDetailContainer,
  LedgerLogo,
} from "./LedgerDetailSty";

const LedgerDetail = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [money, setMoney] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <LedgerDetailContainer>
        <LedgerAddContainer>
          <LedgerLogo>Ledger</LedgerLogo>
          <BillTarget>
            <h3>종류</h3>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">선택해주세요</option>
              <option value="식비">식비</option>
              <option value="교통비">교통비</option>
              <option value="기타경비">기타경비</option>
            </select>
            <p>{selectedOption} : </p>
          </BillTarget>
          <InputMoney>
            <h3>예산(원)</h3>
            <input
              type="text"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
            />
            <p>{money} 원</p>
          </InputMoney>
        </LedgerAddContainer>
      </LedgerDetailContainer>
    </>
  );
};

export default LedgerDetail;
