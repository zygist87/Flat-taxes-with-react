import React from "react";
import styled from "styled-components";

const StyledNotFixedForm = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  line-height: 20px;
  font-size: 20px;
  padding-top: 20px;
  .title {
    padding-left: 10px;
  }
  .total {
    padding-right: 10px;
  }
`;

function NotFixedForm({ name, rate }) {
  return (
    <StyledNotFixedForm>
      <span className="title">{name}</span>
      <span className="from">
        <input type="number" placeholder="From" />
      </span>
      <span className="to">
        <input type="number" placeholder="To" />
      </span>
      <span className="difference">
        <input type="number" placeholder="Difference" />
      </span>
      <span className="rate">
        <input type="number" placeholder={rate} />
      </span>
      <span className="total">Total</span>
    </StyledNotFixedForm>
  );
}

export default NotFixedForm;
