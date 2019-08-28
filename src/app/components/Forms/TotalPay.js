import React, { useContext } from "react";
import styled from "styled-components";
import DeclarationContext from "../DeclarationContext";
import PaymentContext from "../PaymentsContext";

const StyledTotalPay = styled.div`
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  color: green;
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
  const { providers } = useContext(DeclarationContext);
  const { setPaymentData } = useContext(PaymentContext);

  const totalPay = providers
    .reduce((prev, next) => prev + next.pay, 0)
    .toFixed(2);

  const onPay = () => {
    const paymentData = {
      total: totalPay,
      date: new Date(),
      providers
    };
    setPaymentData(paymentData);
  };

  return (
    <StyledTotalPay>
      <span className="title">Total Pay</span>
      <span className="payButton">
        <StyledButton className="payButton" type="button" onClick={onPay}>
          Pay
        </StyledButton>
      </span>
      <span className="totalPay">€ {totalPay}</span>
    </StyledTotalPay>
  );
}

export default TotalPay;
