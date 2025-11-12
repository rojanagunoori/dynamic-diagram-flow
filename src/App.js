import { PipelineToolbar } from "./pages/PipelineToolbar"
import { PipelineUI } from "./pages/PipelineUI"
import { SubmitButton } from "./pages/SubmitButton"

function App() {
  return (
    <div className="flex h-screen flex-col bg-white">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />

    </div>
  );
}

export default App;
