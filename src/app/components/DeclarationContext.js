import React, { useState } from "react";

const DeclarationContext = React.createContext([]);

function DeclarationProvider({ children }) {
  const [providers, setProvider] = useState([]);
  const setProviderData = data => {
    const providerIndex = providers.findIndex(
      provider => provider.name === data.name
    );
    if (providerIndex === -1) {
      setProvider([...providers, data]);
    } else {
      setProvider(
        providers.map((provider, index) =>
          index === providerIndex ? data : provider
        )
      );
    }
  };

  return (
    <DeclarationContext.Provider
      value={{
        providers,
        setProviderData
      }}
    >
      {children}
    </DeclarationContext.Provider>
  );
}

export default DeclarationContext;
export { DeclarationProvider };
