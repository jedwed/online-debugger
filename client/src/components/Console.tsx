import { useContext } from "react";
import { DebuggerContext } from "context/DebuggerContext";

function Console() {
  const { consoleOutput } = useContext(DebuggerContext);
  return <pre className="font-mono m-4">{consoleOutput}</pre>;
}

export default Console;
