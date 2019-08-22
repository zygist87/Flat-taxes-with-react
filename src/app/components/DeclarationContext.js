import React, { useState } from "react";

const DEFAULT_DECLARATION_CONTEXT = { forms: ["to"] };

const DeclarationContext = React.createContext(DEFAULT_DECLARATION_CONTEXT);

function DeclarationProvider({ children }) {
  const [to, setTo] = useState([{ name: "labassssss" }]);

  return (
    <DeclarationContext.Provider
      value={{
        //name,
        //from,

        to
        //difference,
        //rate,
        //total
      }}
    >
      {children}
    </DeclarationContext.Provider>
  );
}

export default DeclarationContext;
export { DeclarationProvider };
