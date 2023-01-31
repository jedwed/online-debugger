import { useContext } from "react";
import { DebuggerContext } from "context/DebuggerContext";

function Console() {
  const { consoleOutput, error } = useContext(DebuggerContext);
  return (
    <div className="border-t border-gray-200 h-[35%] overflow-y-auto">
      <pre className={`font-mono m-4 ${error && "text-red-600"}`}>
        {consoleOutput}
      </pre>
    </div>
  );
}

export default Console;
