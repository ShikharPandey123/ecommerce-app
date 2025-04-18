// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          card: "var(--card)",
          'card-foreground': "var(--card-foreground)",
          primary: "var(--primary)",
          'primary-foreground': "var(--primary-foreground)",
          ring: "var(--ring)",
          // Add the rest as needed
        },
      },
    },
    plugins: [],
  };
  