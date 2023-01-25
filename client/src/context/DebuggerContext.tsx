import { createContext, useState, ReactNode } from "react";

export const DebuggerContext = createContext({
  code: "",
  handleSetCode: (newCode: string) => {},
});

interface Props {
  children: ReactNode;
}

function DebuggerContextProvider({ children }: Props) {
  const [code, setCode] = useState("");
  function handleSetCode(newCode: string) {
    setCode(newCode);
  }

  return (
    <DebuggerContext.Provider value={{ code, handleSetCode }}>
      {children}
    </DebuggerContext.Provider>
  );
}

export default DebuggerContextProvider;
