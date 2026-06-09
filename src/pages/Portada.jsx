import { Link } from "react-router-dom";

export default function Portada() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Rodrigo Zocco - PFO Nº2 - Front End</h1>

      <Link to="/prompt">Ver el texto del Prompt utilizado</Link>

      <Link to="/claude">
        Ir a Landing Page generada por Claude Code (Claude Sonnet)
      </Link>

      <Link to="/openai">
        Ir a Landing Page generada por OpenAI (5.5)
      </Link>
    </div>
  );
}
