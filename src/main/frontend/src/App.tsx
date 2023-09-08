import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import Note from "./note";

function App() {
  const editor: BlockNoteEditor = useBlockNote();

  return (
    <div>
      <BlockNoteView editor={editor} theme={"light"} />
    </div>
  );
}

export default App;
