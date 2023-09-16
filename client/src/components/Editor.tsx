import AceEditor, { IMarker } from 'react-ace';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-c_cpp';

function Editor({
  code,
  handleSetCode,
  currLine,
}: {
  code: string;
  handleSetCode: (newCode: string) => void;
  currLine: number;
}) {
  const annotations = [
    {
      row: currLine - 1, // must be 0 based
      text: 'Current line',
      type: 'info',
    },
  ];
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
        showPrintMargin={false}
        // markers={markers}
        annotations={annotations}
      />
    </div>
  );
}

export default Editor;
