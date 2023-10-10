import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.maincontainer}>
      <Link href="/id" className={styles.post}>
        <div className={styles.imagecontainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/12774064/pexels-photo-12774064.jpeg"
            }
            width={350}
            height={250}
            alt="post"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post Title</h1>
          <p className={styles.text}>Post Text</p>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.imagecontainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/12774064/pexels-photo-12774064.jpeg"
            }
            width={350}
            height={250}
            alt="post"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post Title</h1>
          <p className={styles.text}>Post Text</p>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.imagecontainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/12774064/pexels-photo-12774064.jpeg"
            }
            width={350}
            height={250}
            alt="post"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post Title</h1>
          <p className={styles.text}>Post Text</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
