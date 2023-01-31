import { createContext, useState, ReactNode } from "react";

export const DebuggerContext = createContext({
  code: "",
  handleSetCode: (newCode: string) => {},
  consoleOutput: "",
  handleSetConsoleOutput: (newConsoleOutput: string) => {},
});

interface Props {
  children: ReactNode;
}

function DebuggerContextProvider({ children }: Props) {
  const [code, setCode] = useState("");
  function handleSetCode(newCode: string) {
    setCode(newCode);
  }

  const [consoleOutput, setConsoleOutput] = useState("");
  function handleSetConsoleOutput(newConsoleOutput: string) {
    console.log(newConsoleOutput);
    setConsoleOutput(newConsoleOutput);
  }

  return (
    <DebuggerContext.Provider
      value={{ code, handleSetCode, consoleOutput, handleSetConsoleOutput }}
    >
      {children}
    </DebuggerContext.Provider>
  );
}

export default DebuggerContextProvider;
