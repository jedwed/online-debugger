import { FrameState } from 'interfaces/debugger.interfaces';

function FrameInspector({
  frameStates,
  currIndex,
}: {
  frameStates: FrameState[];
  currIndex: number;
  handleSetCurrIndex: (newIndex: number) => void;
}) {
  return (
    <div className="p-4 overflow-auto">
      <h1 className="text-xl font-bold my-2">Frame Inspector</h1>
      {currIndex in frameStates && (
        <>
          <div>
            <h2 className="text-lg font-bold">Arguments</h2>
            <table className="font-mono border-separate border-spacing-4">
              <tbody>
                {frameStates[currIndex].args.map((arg, index) => (
                  <tr key={index}>
                    <td>{arg.type}</td>
                    <td>{arg.name}</td>
                    <td>{arg.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="text-lg font-bold">Locals</h2>
            <table className="font-mono border-separate border-spacing-4">
              <tbody>
                {frameStates[currIndex].locals.map((local, index) => (
                  <tr key={index}>
                    <td>{local.type}</td>
                    <td>{local.name}</td>
                    <td>{local.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default FrameInspector;
