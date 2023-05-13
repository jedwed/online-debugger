import { createContext, useState, ReactNode } from 'react';

export const DebuggerContext = createContext({
  code: '',
  handleSetCode: (newCode: string) => {},
  consoleOutput: '',
  handleSetConsoleOutput: (newConsoleOutput: string) => {},
  error: false,
  handleSetError: (isError: boolean) => {},
});

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
    console.log(newConsoleOutput);
    setError(false);
    setConsoleOutput(newConsoleOutput);
  }

  return (
    <DebuggerContext.Provider
      value={{
        code,
        handleSetCode,
        consoleOutput,
        handleSetConsoleOutput,
        error,
        handleSetError,
      }}
    >
      {children}
    </DebuggerContext.Provider>
  );
}

export default DebuggerContextProvider;
