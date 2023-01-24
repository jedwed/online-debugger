import { useContext } from "react";
import { DebuggerContext } from "context/DebuggerContext";

function Toolbar() {
  const { code } = useContext(DebuggerContext);
  function handleCompile() {
    console.log(code);
  }

  return <button onClick={handleCompile}>Compile & Run</button>;
}

export default Toolbar;
