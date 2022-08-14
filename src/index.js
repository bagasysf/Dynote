import React from "react";
import { createRoot } from "react-dom/client";
import DynoteApp from "./components/DynoteApp";
import "./css/index.css";

const root = createRoot(document.getElementById("root"));
root.render(<DynoteApp />);
