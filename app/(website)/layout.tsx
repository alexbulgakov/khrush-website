import Header from "@/app/_components/Header/Header";
import { draftMode } from "next/headers";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

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

const LiveVisualEditing = dynamic(
  () => import("@/sanity/loader/LiveVisualEditing")
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  );
}
