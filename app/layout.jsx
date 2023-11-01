import React from "react";

import "@styles/globals.css";
import { Navbar, Provider } from "@components";

export const metadata = {
  title: "Promptopia",
  description: "A prompt generator for writers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
