// RelatedProducts.tsx
import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

interface ProductData {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

const RelatedProducts: React.FC = () => {
  const [relatedProducts, setRelatedProducts] = useState<ProductData[]>([]);

  useEffect(() => {
   
    const randomNo = Math.floor(Math.random() * 100);
    fetch(`http://localhost:5001/products?_start=${randomNo}&_limit=4`)
      .then((response) => response.json())
      .then((data) => setRelatedProducts(data))
      .catch((error) => console.error("Error fetching related products:", error));
  }, []);

  return (
    <div>
      <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
      <div className="wrap-slick2">
        <div className="d-flex">
          {relatedProducts.map((product) => (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
