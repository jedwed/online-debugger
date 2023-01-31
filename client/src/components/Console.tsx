import { useContext } from "react";
import { DebuggerContext } from "context/DebuggerContext";

function Console() {
  const { consoleOutput, error } = useContext(DebuggerContext);
  return (
    <pre className={`font-mono m-4 ${error && "text-red-600"}`}>
      {consoleOutput}
    </pre>
  );
}

export default Console;
