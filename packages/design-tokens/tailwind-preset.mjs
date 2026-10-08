/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-raised": "var(--bg-raised)",
        "bg-core": "var(--bg-core)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        accent: "var(--accent)",
        "accent-text": "var(--accent-text)",
        ink: "var(--ink)",
        night: "var(--night)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)"
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)"
      },
      borderRadius: {
        shell: "28px",
        core: "22px"
      }
    }
  }
};
