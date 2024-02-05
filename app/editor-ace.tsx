"use client"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function AceTest() {
  const code = "var message = 'ACE editor'; \nconsole.log(message);";
  return (
    <AceEditor
      width="100%"
      height="300px"
      value={code}
      mode="javascript"
      theme="monokai"
      fontSize="16px"
      highlightActiveLine={true}
      setOptions={{
        enableLiveAutocompletion: true,
        showLineNumbers: true,
        tabSize: 2, 
        maxLines: Infinity, 
      }}
    />
  );
}
export default AceTest;