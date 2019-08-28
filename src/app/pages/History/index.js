import React, { useContext } from "react";
import "./index.scss";
import PaymentsContext from "../../components/PaymentsContext";
//import DeclarationContext from "../../components/DeclarationContext";

function History() {
  const { payments } = useContext(PaymentsContext);

  // const { providers } = useContext(DeclarationContext);
  //const fromDeclaration = JSON.stringify(providers);

  const fromPayments = JSON.stringify(payments);
  console.log(payments);

  return (
    <div>
      {/* <div>---HISTORY-FROM-DECLARATIONCONTETXT--- {fromDeclaration}</div> */}
      <div>---HISTORY-FROM-PAYMENTSCONTEXT--- {fromPayments}</div>

      <div>
        {payments.map(data => (
          <div key={data.date} {...data}>
            <span>{data.date}</span>
            <span>{data.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
