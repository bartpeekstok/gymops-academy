import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import { allSearchableLessons } from "@/lib/courses";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GymOps Academy",
  description:
    "Leer alles uit het GymOps systeem te halen. Onderwerpen, lessen en uitleg voor gym owners.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lessons = allSearchableLessons();
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans flex min-h-screen flex-col">
        <SearchBar lessons={lessons} />
        <div className="flex-1">{children}</div>
        <footer className="bg-white border-t border-border">
          <div className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo.png"
              alt="GymOps"
              className="h-5 w-auto opacity-80"
            />
            <span className="text-[13px] text-fg-muted">GymOps Academy</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
