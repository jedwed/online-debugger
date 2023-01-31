import { useContext } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-c_cpp";
import { DebuggerContext } from "context/DebuggerContext";

function Editor() {
  const { code, handleSetCode } = useContext(DebuggerContext);

  return (
    <AceEditor
      // theme="dracula"
      mode="c_cpp"
      value={code}
      onChange={handleSetCode}
      height="65%"
      width="100%"
      fontSize="15px"
      // showPrintMargin={false}
    />
  );
}

export default Editor;
