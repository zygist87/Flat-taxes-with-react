import React, { useContext } from "react";
import "./index.scss";
import { format } from "date-fns";
import PaymentsContext from "../../components/PaymentsContext";
import styled from "styled-components";

const StyledHistory = styled.div`
  width: 80vw;
  height: 83vh;
  font-size: 24px;
  line-height: 40px;
  padding-top: 20px;
  .payments {
    display: flex;
  }
  .paymentDate {
    color: green;
    text-align: left;
    width: 50vw;
  }
  .paymentPay {
    color: blue;
    text-align: right;
    width: 50vw;
  }
`;

function History() {
  const { payments } = useContext(PaymentsContext);

  return (
    <StyledHistory>
      {payments.map(data => (
        <div className="payments" key={data.date} {...data}>
          <span className="paymentDate">
            {format(new Date(data.date), "yyyy-MM-dd hh:mm:ss")}
          </span>
          <span className="paymentPay">€ {data.total}</span>
        </div>
      ))}
    </StyledHistory>
  );
}

export default History;
