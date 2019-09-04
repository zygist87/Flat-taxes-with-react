import React, { useState, useContext } from "react";
import DeclarationContext from "../DeclarationContext";
import styled from "styled-components";

const StyledFixedForm = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  line-height: 20px;
  font-size: 20px;
  padding-top: 20px;
  text-align: left;

  .title {
    padding-left: 20px;
    width: 65vw;
  }
  .input {
    width: 15vw;
  }
  .total {
    width: 20vw;
    padding-right: 20px;
    text-align: right;
  }
`;

function FixedForm({ name }) {
  const { setProviderData } = useContext(DeclarationContext);
  const [pay, setPay] = useState(0);

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
