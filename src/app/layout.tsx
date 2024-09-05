import "~/styles/globals.css";

import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";

import { type Metadata } from "next";
import { PageHeader } from "~/components/page-header";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpaceTraders UI",
  description: "Connect and play with the SpaceTraders API",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body className="overflow-none h-screen bg-slate-100 dark:bg-slate-800 dark:text-white">
        <ThemeProvider attribute="class">
          <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <PageHeader />
            <main className="overflow-auto p-2" style={{ height: "90%" }}>
              {children}
            </main>
          </PrimeReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
