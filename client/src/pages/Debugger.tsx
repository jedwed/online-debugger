import { createContext, useState } from "react";
import Navbar from "components/Navbar";
import Editor from "components/Editor";
import Console from "components/Console";
import DebuggerContextProvider from "context/DebuggerContext";
import Toolbar from "components/Toolbar";

function Debugger() {
  return (
    <DebuggerContextProvider>
      <Navbar />
      <Toolbar />
      <Editor />
      <Console />
    </DebuggerContextProvider>
  );
}

export default Debugger;
