import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-c_cpp';

function Editor({
  code,
  handleSetCode,
}: {
  code: string;
  handleSetCode: (newCode: string) => void;
}) {
  return (
    <div className="h-[65%]">
      <AceEditor
        // theme="dracula"
        mode="c_cpp"
        value={code}
        onChange={handleSetCode}
        height="100%"
        // height="65%"
        width="100%"
        fontSize="15px"
        // showPrintMargin={false}
      />
    </div>
  );
}

export default Editor;
