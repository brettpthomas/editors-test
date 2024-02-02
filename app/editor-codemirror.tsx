"use client"

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import {githubLight} from "@uiw/codemirror-theme-github";
import { langs } from '@uiw/codemirror-extensions-langs';


function CodeMirrorTest() {
    const code = "console.log('Code Mirror');\nconsole.log('Hello, World!');\n";
    return (
      <CodeMirror
        value={code}
        minHeight="200px"
        width="100%"
        theme={githubLight}
        basicSetup={true}
        extensions={[langs.python(), langs.javascript(), langs.java(), langs.javascript({jsx: true})]}
      />
    );
}
export default CodeMirrorTest;