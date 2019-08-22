import React, { useState } from "react";

const DeclarationContext = React.createContext({});

function DeclarationProvider({ children }) {
  const [providers, setProvider] = useState([]);
  const setProviderData = data => {
    console.log(data);
  };
  return (
    <DeclarationContext.Provider
      value={{
        providers,
        setProviderData
        //date
      }}
    >
      {children}
    </DeclarationContext.Provider>
  );
}

export default DeclarationContext;
export { DeclarationProvider };
