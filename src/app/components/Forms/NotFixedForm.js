import React, { useState } from "react";
import styled from "styled-components";

const StyledNotFixedForm = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  justify-content: space-between;
  line-height: 20px;
  font-size: 20px;
  padding-top: 20px;

  .title {
    padding-left: 10px;
  }
  .from {
  }
  .to {
  }
  .difference {
  }
  .rate {
  }
  .total {
    padding-right: 10px;
  }
`;

function NotFixedForm({ name, from, rate }) {
  const [to, setTo] = useState(0);
  const totalPay = to * rate;
  const totalPayRounded = totalPay.toFixed(2);
  if (to < 0) {
    alert("You have entered a negative amount");
  }
  return (
    <StyledNotFixedForm>
      <span className="title">{name}</span>
      <span className="from">
        <input type="number" placeholder="From" disabled value={from} />
      </span>
      <span className="to">
        <input
          type="number"
          placeholder="To"
          onChange={event => setTo(event.target.value)}
        />
      </span>
      <span className="difference">
        <input
          type="number"
          placeholder="Difference"
          disabled
          value={to - from}
        />
      </span>
      <span className="rate">
        <input type="number" placeholder={rate} disabled />
      </span>
      <span className="total">€ {totalPayRounded}</span>
    </StyledNotFixedForm>
  );
}

export default NotFixedForm;
