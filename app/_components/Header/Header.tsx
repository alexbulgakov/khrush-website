"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Link
        className={`styles.link ${
          pathname === "/heritage/mosaic" ? styles.active : ""
        }`}
        href={"/heritage/mosaic"}
      >
        Мозаики
      </Link>
    </header>
  );
}
