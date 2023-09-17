import AceEditor, { IMarker } from 'react-ace';
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
  const markers: IMarker[] = [
    {
      startRow: currLine - 1,
      startCol: 0,
      endRow: currLine - 1,
      endCol: 1,
      className: 'marker',
      type: 'fullLine',
    },
  ];
  return (
    <div className="h-[65%]">
      <AceEditor
        mode="c_cpp"
        value={code}
        onChange={handleSetCode}
        height="100%"
        width="100%"
        fontSize="15px"
        showPrintMargin={false}
        markers={markers}
      />
    </div>
  );
}

export default Editor;
