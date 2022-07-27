import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";

export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
