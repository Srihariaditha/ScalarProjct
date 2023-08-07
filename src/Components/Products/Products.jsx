import { useEffect, useState, memo } from "react";
import ProductCard from "./../ProductCard";
import { Link } from "react-router-dom";

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [products]);

  if (isLoading) {
    return <div> Loading </div>;
  } else {
    return (
      <div>
        <Link to="/cart"> Cart</Link>
        {products.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    );
  }
}

export default memo(Products);
