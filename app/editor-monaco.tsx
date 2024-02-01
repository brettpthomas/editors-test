"use client"

import Editor from "@monaco-editor/react";
function MonacoTest() {
  const code = "console.log('Monaco Editor!');";
  return (
    <Editor
      height="100px"
      language="python"
      theme="vs-dark"
      value={code}
    />
  );
}
export default MonacoTest;