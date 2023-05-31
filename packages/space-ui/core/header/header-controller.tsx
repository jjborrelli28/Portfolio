import { createContext, PropsWithChildren, useContext, useState } from "react";

const initialState: InitialStateProps = {
  status: "closed",
  setStatus: () => undefined,
};

const HeaderContext = createContext(initialState);

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderController = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(initialState);

  return (
    <HeaderContext.Provider value={{ ...status, setStatus }}>
      {children}
    </HeaderContext.Provider>
  );
};

export type InitialStateProps = {
  status: "opened" | "closed";
  setStatus?: any;
};
