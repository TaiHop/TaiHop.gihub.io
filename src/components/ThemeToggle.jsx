import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");

    const newTheme = document.body.classList.contains("dark-mode");
    setIsDark(newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      className={`theme-toggle ${isDark ? "active" : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <span className="theme-toggle-circle"></span>
    </button>
  );
};

export default ThemeToggle;
