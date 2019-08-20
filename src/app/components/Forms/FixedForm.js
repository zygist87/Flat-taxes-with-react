import React from "react";
import styled from "styled-components";

const StyledFixedForm = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  line-height: 20px;
  font-size: 20px;
  padding-top: 20px;

  .FixedForm--title {
    padding-left: 10px;
  }
  .FixedForm--input {
  }
  .FixedForm--total {
    padding-right: 10px;
  }
`;

function FixedForm({ name, rate }) {
  return (
    <StyledFixedForm className="">
      <span className="FixedForm--title">{name}</span>
      <span className="FixedForm--input">
        <input type="number" placeholder={rate} />
      </span>
      <span className="FixedForm--total">Total</span>
    </StyledFixedForm>
  );
}

export default FixedForm;
