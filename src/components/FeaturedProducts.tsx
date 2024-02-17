import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";


interface Product {
  id: string;
  title: string;
  price: string;
  img: string;
  description: string;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    
    fetch("http://localhost:5001/products/?_limit=4")
      .then((response) => response.json())
      .then((data) => setProducts(data as Product[])) 
      .catch((error) => console.error("Error fetching featured products:", error));
  }, []);

  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div className="tab-pane fade show active" id="best-seller" role="tabpanel">
              <div className="wrap-slick2">
                <div className="d-flex">
                
                  
                  {products.map((product) => (
                    <ProductItem
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.img}
                      description={product.description}
                      
                    />
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
