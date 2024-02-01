"use client"

import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

function App() {
    const [code, setCode] = useState(
      "var message = 'react simple code editor' \nconsole.log(message);"
    );
    return (
      <Editor
        value={code}
        padding={10}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        style={{
          fontFamily: "monospace",
          fontSize: 17,
          border: "1px solid black",
          width: "100%",
        }}
      />
    );
  }
  export default App;