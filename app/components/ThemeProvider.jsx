"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * Manages dark/light/auto theme.
 * Wraps the app so any component can call useTheme().
 */
export default function ThemeProvider({ children }) {
  // "light" | "dark" | "auto"
  const [mode, setMode] = useState("auto");

  // On mount: read saved preference
  useEffect(() => {
    const saved = localStorage.getItem("theme-mode") || "auto";
    setMode(saved);
  }, []);

  // Whenever mode changes: apply the correct class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else if (mode === "light") {
      root.classList.remove("dark");
    } else {
      // auto — follow system
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  // Also listen for system changes when mode === "auto"
  useEffect(() => {
    if (mode !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
