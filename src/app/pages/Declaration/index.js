import React from "react";
import "./index.scss";
import { FixedForm, NotFixedForm, TotalPay } from "../../components/Forms";
import styled from "styled-components";

const StyledDeclaration = styled.div`
  background: lightblue;
  color: white;
`;

function Declaration() {
  return (
    <StyledDeclaration>
      <NotFixedForm
        name="Electricity"
        from="0"
        to=""
        difference=""
        rate="0.113"
      />
      <NotFixedForm name="Gas" from="0" to="" difference="" rate="0.66" />
      <FixedForm name="Gas Fixed Part" />
      <NotFixedForm
        name="Cold Water"
        from="0"
        to=""
        difference=""
        rate="1.36"
      />
      <FixedForm name="Cold Water Fixed Part" />
      <FixedForm name="Other Services" />
      <FixedForm name="Heating" />
      <FixedForm name="Internet" />
      <TotalPay />
    </StyledDeclaration>
  );
}

export default Declaration;
