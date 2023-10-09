import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/undraw_Real_time_sync_re_nky7.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Shop for small laptops at Best Buy</h1>
        <p className={styles.description}>
          Find low everyday prices and buy online for delivery or in-store
          pick-up
        </p>
        <button className={styles.button}>order now</button>
      </div>
      <div className={styles.col}>
        <Image src={Hero} alt="Hero" />
      </div>
    </div>
  );
}
