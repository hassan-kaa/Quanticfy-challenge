import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { FilterProvider } from "./contexts/FiltersContext";
const nexa = localFont({
  src: [
    {
      path: "../public/Nexa-ExtraLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Nexa-Heavy.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quanticfy challenge",
  description:
    "Cette application permettra aux utilisateurs de trouver facilement des endroits frais à Paris en utilisant des filtres pertinents et en affichant les résultats de manière claire et organisée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nexa.className}>
        <FilterProvider>{children}</FilterProvider>
      </body>
    </html>
  );
}
