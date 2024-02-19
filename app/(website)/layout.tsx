import type { Metadata } from "next";
import Header from "@/components/global/Header/Header";

export const metadata: Metadata = {
  title: "Храш",
  description: "Нескучная история",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/favicon/favicon-light.ico",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
