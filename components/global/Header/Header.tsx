"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Link
        className={`styles.link ${
          pathname === "/heritage/mosaics" ? styles.active : ""
        }`}
        href={"/heritage/mosaics"}
      >
        Мозаики
      </Link>
    </header>
  );
}
