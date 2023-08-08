import AddToCart from "../AddToCart/AddToCart";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
  // console.log("productCart", product.id);
  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <p>{product.price.value}</p>
      <AddToCart product={product} />
    </div>
  );
}

//card-21221131
