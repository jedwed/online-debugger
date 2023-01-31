import { createContext, useState } from "react";
import Navbar from "components/Navbar";
import Editor from "components/Editor";
import Console from "components/Console";
import DebuggerContextProvider from "context/DebuggerContext";
import Toolbar from "components/Toolbar";

function Debugger() {
  return (
    <DebuggerContextProvider>
      <div className="flex flex-col h-screen">
        <div>
          <Navbar />
          <Toolbar />
        </div>
        <div className="flex-grow">
          <Editor />
          <Console />
        </div>
      </div>
    </DebuggerContextProvider>
  );
}

export default Debugger;
