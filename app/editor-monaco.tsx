"use client"

import Editor from "@monaco-editor/react";
function MonacoTest() {
  const code = "console.log('Monaco Editor!');";
  return (
    <div style={{minHeight: "200px"}}>
    <Editor
      height="300px"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={{
        automaticLayout: true,
      }}
    />
    </div>
  );
}
export default MonacoTest;