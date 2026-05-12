import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import { allSearchableLessons } from "@/lib/courses";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GymOps Academy",
  description:
    "Leer alles uit het GymOps systeem te halen. Onderwerpen, lessen en uitleg voor gym owners.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lessons = allSearchableLessons();
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans">
        <SearchBar lessons={lessons} />
        {children}
      </body>
    </html>
  );
}
