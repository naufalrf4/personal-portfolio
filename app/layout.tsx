import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Toaster } from "@/components/ui/sonner";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "NaufalRF Portfolio ",
  description:
    "Welcome to Naufal RF's portfolio website. Naufal is a Computer Engineering student at IPB University with a passion for web development. Explore his projects and skills in web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
