"use client"

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";


function CodeMirrorTest() {
    const code = "console.log('Code Mirror');";
    return (
      <CodeMirror
        value={code}
        height="100px"
        width="100%"
        theme={vscodeDark}
      />
    );
}
export default CodeMirrorTest;