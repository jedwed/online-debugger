import { useState } from 'react';
import axios from 'axios';
import Navbar from 'components/Navbar';
import Editor from 'components/Editor';
import Console from 'components/Console';
import Toolbar from 'components/Toolbar';
import FrameInspector from 'components/FrameInspector';
import Controls from 'components/Controls';
import { FrameState } from 'interfaces/debugger.interfaces';

function Debugger() {
  const [code, setCode] = useState(localStorage.getItem('storedCode') || '');
  const [consoleOutput, setConsoleOutput] = useState('');
  const [frameStates, setFrameStates] = useState<FrameState[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const handleSetCode = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem('storedCode', newCode);
  };

  const handleCompile = () => {
    setLoading(true);
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/compile`,
        {
          language: 'c',
          code,
        },
        { timeout: 100000 }
      )
      .then((response) => {
        setLoading(false);
        setConsoleOutput(response.data.stdout);
        setFrameStates(response.data.debug);
        setCurrIndex(0);
      })
      .catch((err) => {
        console.log(err);
        setConsoleOutput(
          err?.response?.data?.stderr ||
            'Response not received from server or server timed out'
        );
        setError(true);
        setLoading(false);
      });
  };

  const handleSetCurrIndex = (newIndex: number) => {
    setCurrIndex(newIndex);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex grow overflow-hidden">
        <div className="w-1/2 flex flex-col border-r border-gray-200">
          <Toolbar handleCompile={handleCompile} loading={loading} />
          <Editor
            currLine={
              currIndex in frameStates ? frameStates[currIndex].line : 0
            }
            code={code}
            handleSetCode={handleSetCode}
          />
          <Console consoleOutput={consoleOutput} error={error} />
        </div>
        <div className="w-1/2 flex flex-col">
          <Controls
            currIndex={currIndex}
            numOfStates={frameStates.length}
            handleSetCurrIndex={handleSetCurrIndex}
          />
          <FrameInspector
            currIndex={currIndex}
            frameStates={frameStates}
            handleSetCurrIndex={handleSetCurrIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Debugger;
