import { createContext, useState, ReactNode, useMemo } from 'react';

export interface DebuggerContextType {
  code: string;
  handleSetCode: (newCode: string) => void;
  consoleOutput: string;
  handleSetConsoleOutput: (newConsoleOutput: string) => void;
  error: boolean;
  handleSetError: (isError: boolean) => void;
}
export const DebuggerContext = createContext<DebuggerContextType | null>(null);

interface Props {
  children: ReactNode;
}

function DebuggerContextProvider({ children }: Props) {
  const [code, setCode] = useState(localStorage.getItem('storedCode') || '');
  function handleSetCode(newCode: string) {
    setCode(newCode);
    localStorage.setItem('storedCode', newCode);
  }

  const [error, setError] = useState(false);
  function handleSetError(isError: boolean) {
    setError(isError);
  }

  const [consoleOutput, setConsoleOutput] = useState('');
  function handleSetConsoleOutput(newConsoleOutput: string) {
    setError(false);
    setConsoleOutput(newConsoleOutput);
  }

  const debuggerContextProviderValue = useMemo(
    () => ({
      code,
      handleSetCode,
      consoleOutput,
      handleSetConsoleOutput,
      error,
      handleSetError,
    }),
    [code, consoleOutput, error]
  );

  return (
    <DebuggerContext.Provider value={debuggerContextProviderValue}>
      {children}
    </DebuggerContext.Provider>
  );
}

export default DebuggerContextProvider;
