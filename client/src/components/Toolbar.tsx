import { useContext } from "react";
import axios from "axios";
import { WrenchIcon, BugAntIcon } from "@heroicons/react/24/solid";
import { DebuggerContext } from "context/DebuggerContext";

function Toolbar() {
  const { code, handleSetConsoleOutput } = useContext(DebuggerContext);
  function handleCompile() {
    axios
      .post("http://localhost:8000/compile", {
        language: "c",
        code,
      })
      .then((response) => handleSetConsoleOutput(response.data.stdout))
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex h-12">
      <button
        className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded px-2 py-2 mx-2 my-2 inline-flex items-center"
        onClick={handleCompile}
      >
        <WrenchIcon className="h-4 w-4" />
        <span>Compile & Run</span>
      </button>

      <button
        className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded px-2 py-2 mx-2 my-2 inline-flex items-center"
        onClick={handleCompile}
      >
        <BugAntIcon className="h-4 w-4" />
        <span>Debug</span>
      </button>
    </div>
  );
}

export default Toolbar;
