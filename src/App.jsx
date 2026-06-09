import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portada from "./pages/Portada";
import ClaudeLanding from "./pages/ClaudeLanding";
import OpenaiLanding from "./pages/OpenaiLanding";
import Prompt from "./pages/Prompt";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/prompt" element={<Prompt />} />
        <Route path="/claude" element={<ClaudeLanding />} />
        <Route path="/openai" element={<OpenaiLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

