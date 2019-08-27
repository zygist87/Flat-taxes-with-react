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
  const [pay, setPay] = useState();

  if (pay < 0) {
    alert("You have entered a negative amount");
  }

  const onChange = event => {
    const { value } = event.target;
    const pay = Number(value);
    setPay(value);

    setProviderData({ name, rate: event.target.value, pay });
  };

  return (
    <StyledFixedForm>
      <span className="title">{name}</span>
      <span className="input">
        <input type="number" onChange={onChange} />
      </span>
      <span className="total">€ {pay}</span>
    </StyledFixedForm>
  );
}

export default FixedForm;
