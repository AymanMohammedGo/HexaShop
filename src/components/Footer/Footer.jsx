import styles from "./Footer.module.css";
import { social_media } from "./data";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 All right reserved - Ayman Mohammed</div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons8_${media.name}.png`}
            width={22}
            height={22}
            className={styles.icon}
            alt={media.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
