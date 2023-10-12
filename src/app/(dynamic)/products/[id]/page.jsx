import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Product = async ({ params }) => {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.contant}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          facilis magni laudantium illo adipisci porro id modi, veritatis,
          voluptatum quas officia, nesciunt dolor libero labore obcaecati itaque
          aperiam praesentium! Quo assumenda eligendi, animi ad officia eius
          magni repellat labore, neque, eaque ab! Harum consequatur dicta
          impedit suscipit doloribus perspiciatis ipsum ad laudantium error
          atque laborum magnam est, explicabo autem corrupti eveniet sapiente
          eligendi laboriosam odio alias dolore voluptas omnis. Esse saepe,
          assumenda, quam veniam mollitia odio modi nesciunt maxime alias ipsa
          magni debitis ea sint repellendus, corporis quod iste quas voluptates
          animi ullam. Et ea expedita, illum ducimus recusandae, perspiciatis
          sapiente quibusdam corrupti nulla atque quidem, esse laboriosam
          mollitia voluptas possimus cumque quo dicta enim obcaecati ullam!
          Quos, itaque nobis impedit deleniti excepturi placeat a facere harum
          sapiente nesciunt non sint? Aut voluptatem minima distinctio aliquam
          possimus eligendi, necessitatibus cupiditate pariatur enim sequi, cum
          nisi sed? Nulla aut qui consequatur. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Tenetur facilis magni laudantium illo
          adipisci porro id modi, veritatis, voluptatum quas officia, nesciunt
          dolor libero labore obcaecati itaque aperiam praesentium! Quo
          assumenda eligendi, animi ad officia eius magni repellat labore,
          neque, eaque ab! Harum consequatur dicta impedit suscipit doloribus
          perspiciatis ipsum ad laudantium error atque laborum magnam est,
          explicabo autem corrupti eveniet sapiente eligendi laboriosam odio
          alias dolore voluptas omnis. Esse saepe, assumenda, quam veniam
          mollitia odio modi nesciunt maxime alias ipsa magni debitis ea sint
          repellendus, corporis quod iste quas voluptates animi ullam. Et ea
          expedita, illum ducimus recusandae, perspiciatis sapiente quibusdam
          corrupti nulla atque quidem, esse laboriosam mollitia voluptas
          possimus cumque quo dicta enim obcaecati ullam! Quos, itaque nobis
          impedit deleniti excepturi placeat a facere harum sapiente nesciunt
          non sint? Aut voluptatem minima distinctio aliquam possimus eligendi,
          necessitatibus cupiditate pariatur enim sequi, cum nisi sed? Nulla aut
          qui consequatur.
        </p>
      </div>
    </div>
  );
};

export default Product;
