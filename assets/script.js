(() => {
    const STORAGE_KEY = "parrazam-theme";
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");

    const applyTheme = (theme) => {
        if (theme === "light" || theme === "dark") {
            root.setAttribute("data-theme", theme);
        } else {
            root.removeAttribute("data-theme");
        }
    };

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) applyTheme(stored);

    const currentTheme = () => {
        const explicit = root.getAttribute("data-theme");
        if (explicit) return explicit;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    toggle?.addEventListener("click", () => {
        const next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
