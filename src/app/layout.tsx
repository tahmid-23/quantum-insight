import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import NavBar from "@/components/ui/NavBar";
import { theme } from "./theme";

export const metadata: Metadata = {
  title: "Quantum Insight",
  description: "Learn about the quantum realm.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <NavBar />
          <main className="px-20 py-12 grow">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
