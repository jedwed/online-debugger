import { useState } from 'react';
import axios from 'axios';
import Navbar from 'components/Navbar';
import Editor from 'components/Editor';
import Console from 'components/Console';
import Toolbar from 'components/Toolbar';

function Debugger() {
  const [code, setCode] = useState(localStorage.getItem('storedCode') || '');
  const [consoleOutput, setConsoleOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
        console.log(response.data.debug);
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

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
        <Toolbar handleCompile={handleCompile} loading={loading} />
      </div>
      <div className="grow overflow-hidden">
        <Editor code={code} handleSetCode={handleSetCode} />
        <Console consoleOutput={consoleOutput} error={error} />
      </div>
    </div>
  );
}

export default Debugger;
