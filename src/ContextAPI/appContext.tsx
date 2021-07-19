import React, { useState, createContext } from "react";

type ContextProps = {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<ContextProps>({
  darkmode: false,
  setDarkmode: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </AppContext.Provider>
  );
};
