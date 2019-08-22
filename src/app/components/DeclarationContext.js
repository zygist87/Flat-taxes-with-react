import React, { useState } from "react";

const DEFAULT_DECLARATION_CONTEXT = { forms: [] };

const DeclarationContext = React.createContext(DEFAULT_DECLARATION_CONTEXT);

function DeclarationProvider({ children }) {
  const [to, setTo] = useState([]);

  return (
    <DeclarationContext.Provider
      value={
        {
          //name,
          //from,
          //to
          //difference,
          //rate,
          //total
        }
      }
    >
      {children}
    </DeclarationContext.Provider>
  );
}

export default DeclarationContext;
export { DeclarationProvider };
