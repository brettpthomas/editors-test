import Image from "next/image";
import SimpleTest from "./editor-simple";
import CodeMirrorTest from "./editor-codemirror";
import MonacoTest from "./editor-monaco";
import AceTest from "./editor-ace";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 max-w-[800px]">
      
      <h2>react-simple-code-editor</h2>
      <SimpleTest />

      <div style={{height: "2rem"}}/>

      <h2>CodeMirror</h2>
      <CodeMirrorTest />

      <div style={{height: "2rem"}}/>

      <h2>Monaco</h2>
      <MonacoTest />

      <div style={{height: "2rem"}}/>

      <h2>Ace</h2>
      <AceTest />

    </main>
  );
}
