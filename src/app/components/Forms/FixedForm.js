import React, { useState, useContext } from "react";
import DeclarationContext from "../DeclarationContext";
import styled from "styled-components";

const StyledFixedForm = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  line-height: 20px;
  font-size: 20px;
  padding-top: 20px;

  .title {
    padding-left: 10px;
  }
  .input {
  }
  .total {
    padding-right: 10px;
  }
`;

function FixedForm({ name }) {
  const { setProviderData } = useContext(DeclarationContext);
  const [total, setTotal] = useState(0);

  if (total < 0) {
    alert("You have entered a negative amount");
  }

  const onChange = event => {
    setTotal(event.target.value);
    setProviderData({ name, pay: event.target.value });
  };

  return (
    <StyledFixedForm>
      <span className="title">{name}</span>
      <span className="input">
        <input type="number" onChange={onChange} />
      </span>
      <span className="total">€ {total}</span>
    </StyledFixedForm>
  );
}

export default FixedForm;
