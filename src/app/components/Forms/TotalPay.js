import React from "react";
import styled from "styled-components";

const StyledTotalPay = styled.div`
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  .title {
    padding-left: 10px;
  }
  .totalPay {
    padding-right: 10px;
  }
`;

const StyledButton = styled.button`
  border: 1px solid orange;
  border-radius: 6px;
  background: orange;
  font-size: 24px;
  line-height: 24px;

  justify-items: right;
  margin: 10px 0px 10px 10px;
`;

function TotalPay() {
  function hi() {
    return console.log("labassss");
  }
  return (
    <StyledTotalPay>
      <span className="title">Total Pay</span>
      <span className="payButton">
        <StyledButton className="payButton" type="button" onClick={hi}>
          Pay
        </StyledButton>
      </span>
      <span className="totalPay">suma</span>
    </StyledTotalPay>
  );
}

export default TotalPay;
