import React, { useState, useContext } from "react";
import styled from "styled-components";
import DeclarationContext from "../DeclarationContext";

const StyledNotFixedForm = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  justify-content: center;
  line-height: 20px;
  font-size: 20px;
  padding-top: 20px;

  .title {
    padding-left: 20px;
    width: 20vw;
    text-align: left;
  }
  .from {
    width: 15vw;
  }
  .to {
    width: 15vw;
  }
  .difference {
    width: 15vw;
  }
  .rate {
    width: 15vw;
  }
  .total {
    padding-right: 20px;
    width: 20vw;
    text-align: right;
  }
`;

function NotFixedForm({ name, from, rate }) {
  const { setProviderData } = useContext(DeclarationContext);
  const [to, setTo] = useState(0);

  const difference = (to > 0 ? to : from) - from;
  const pay = (difference * rate).toFixed(2);
  if (to < 0) {
    alert("You have entered a negative amount");
  }
  const onChange = event => {
    const { value } = event.target;
    const difference = value - from;
    const pay = Number((difference * rate).toFixed(2));
    setTo(value);

    setProviderData({
      name,
      from,
      to: event.target.value,
      difference,
      rate,
      pay
    });
  };

  return (
    <StyledNotFixedForm>
      <span className="title">{name}</span>
      <span className="from">
        <input type="number" placeholder="From" disabled value={from} />
      </span>
      <span className="to">
        <input type="number" placeholder="To" onChange={onChange} />
      </span>
      <span className="difference">
        <input
          type="number"
          placeholder="Difference"
          disabled
          value={difference}
        />
      </span>
      <span className="rate">
        <input type="number" placeholder={rate} value={rate} disabled />
      </span>
      <span className="total">€ {pay}</span>
    </StyledNotFixedForm>
  );
}

export default NotFixedForm;
