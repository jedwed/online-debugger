import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Debugger from "pages/Debugger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/debugger" element={<Debugger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
