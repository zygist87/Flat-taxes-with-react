import React, { useState } from "react";

const PaymentContext = React.createContext([]);

function PaymentProvider({ children }) {
  const [payments, setPayment] = useState([]);
  const setPaymentData = newPayment => {
    setPayment([...payments, newPayment]);
  };

  return (
    <PaymentContext.Provider value={{ payments, setPaymentData }}>
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;
export { PaymentProvider };
