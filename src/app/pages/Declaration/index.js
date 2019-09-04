import React, { useContext } from "react";
import "./index.scss";
import { FixedForm, NotFixedForm, TotalPay } from "../../components/Forms";
import styled from "styled-components";
import PaymentContext from "../../components/PaymentsContext";

const StyledDeclaration = styled.div`
  background: lightblue;
  color: white;
`;

function Declaration() {
  const { payments } = useContext(PaymentContext);

  const fromLastPayment = data => {
    if (payments.length <= 0) {
      return 0;
    } else {
      const latestPayment = payments[payments.length - 1];
      //console.log(latestPayment.providers);

      const result = latestPayment.providers[data].to;
      return result;
    }
  };

  return (
    <StyledDeclaration>
      <NotFixedForm
        name="Electricity"
        from={fromLastPayment(0)}
        to=""
        difference=""
        rate="0.13"
      />
      <NotFixedForm
        name="Gas"
        from={fromLastPayment(1)}
        to=""
        difference=""
        rate="0.66"
      />
      <FixedForm name="Gas Fixed Part" />
      <NotFixedForm
        name="Cold Water"
        from={fromLastPayment(3)}
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
