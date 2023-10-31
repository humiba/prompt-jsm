import React from "react";

import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "A prompt generator for writers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}