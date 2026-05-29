"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const FALLBACK_THEME: Theme = "light";

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return FALLBACK_THEME;
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function handleThemeChange() {
    onStoreChange();
  }

  window.addEventListener("themechange", handleThemeChange);
  mediaQuery.addEventListener("change", handleThemeChange);

  return () => {
    window.removeEventListener("themechange", handleThemeChange);
    mediaQuery.removeEventListener("change", handleThemeChange);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    () => FALLBACK_THEME,
  );

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--button-secondary-bg)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-[var(--button-secondary-shadow)] hover:border-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
