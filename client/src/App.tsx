import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Debugger from 'pages/Debugger';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Debugger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
