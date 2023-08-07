export default function ProductCard({ product }) {
  console.log(product.title);
  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
}
