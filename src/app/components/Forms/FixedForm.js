import React, { useState, useContext } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

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

function FixedForm({ name, fixedPart }) {
  // const {
  //   name,
  //   toggleFavourite,
  //   addToCart,
  //   favourites,
  //   cart
  // } = useContext(ShopContext);

  const [total, setTotal] = useState(0);
  if (total < 0) {
    alert("You have entered a negative amount");
  }
  return (
    <StyledFixedForm>
      <span className="title">{name}</span>
      <span className="input">
        <input
          type="number"
          // placeholder={fixedPart}
          value={fixedPart}
          onChange={event => setTotal(event.target.value)}
        />
      </span>
      <span className="total">€ {total}</span>
    </StyledFixedForm>
  );
}

export default FixedForm;
