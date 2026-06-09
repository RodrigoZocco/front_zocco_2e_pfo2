import React from "react";
import { Link } from "react-router-dom";

export default function BotonVolver() {
  return (
    <Link
      to="/"
      style={{
        display: "inline-block",
        padding: "0.75rem 1.25rem",
        marginBottom: "1.5rem",
        background: "#646cff",
        color: "white",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "600",
      }}
    >
      ← Volver al Inicio
    </Link>
  );
}
