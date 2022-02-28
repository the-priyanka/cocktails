import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = (props) => {
  return (
    <AppContext.Provider value="The Priyanka here!!!!!!!!!!">
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
