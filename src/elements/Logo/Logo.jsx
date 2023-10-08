import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";
import { Lobster } from "next/font/google";
const logoFont = Lobster({ subsets: ["latin"], weight: ["400"] });
const Logo = () => {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
      HEXASHOP
    </Link>
  );
};

export default Logo;
