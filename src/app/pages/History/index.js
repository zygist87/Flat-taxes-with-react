import React, { useContext } from "react";
import "./index.scss";
import PaymentsContext from "../../components/PaymentsContext";
import styled from "styled-components";

const StyledHistory = styled.div`
  width: 100vw;
  height: 83vh;
  font-size: 24px;
  line-height: 24px;
  padding: 10px;

  .paymentDate {
    color: green;
  }
  .paymentPay {
    color: blue;
  }
`;

function History() {
  const { payments } = useContext(PaymentsContext);

  return (
    <StyledHistory>
      {payments.map(data => (
        <div key={data.date} {...data}>
          <span className="paymentDate">{data.date.toString()}</span>
          <span className="paymentPay">€ {data.total}</span>
        </div>
      ))}
    </StyledHistory>
  );
}

export default History;
