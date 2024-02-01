import Image from "next/image";
import App from "./editor-simple";
import CodeMirrorTest from "./editor-codemirror";
import MonacoTest from "./editor-monaco";
import AceTest from "./editor-ace";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 max-w-[800px]">
      
      <App />

      <hr />

      <CodeMirrorTest />

      <hr />

      <MonacoTest />

      <hr />

      <AceTest />

    </main>
  );
}
