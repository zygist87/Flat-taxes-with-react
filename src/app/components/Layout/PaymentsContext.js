import React, { useState, useContext } from "react";
import DeclarationContext from "../DeclarationContext";

const PaymentContext = React.createContext([]);

function PaymentProvider({ children }) {
  return <DeclarationContext.Provider>{children}</DeclarationContext.Provider>;
}
