import "~/styles/globals.css";

import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/providers/theme";
import { PageHeader } from "~/components/page-header";

export const metadata: Metadata = {
  title: "SpaceTraders UI",
  description: "Connect and play with the SpaceTraders API",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="overflow-none h-screen bg-slate-100 dark:bg-slate-800 dark:text-white">
        <ThemeProvider>
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
