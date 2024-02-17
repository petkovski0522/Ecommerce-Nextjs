import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  gender: string;
  category: string;
  price: string;
  img: string;
};

const Shop: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    let url = "http://localhost:5001/products";
    const queryParams: string[] = [];

    if (genderFilter) {
      queryParams.push(`gender=${genderFilter}`);
    }

    if (searchQuery) {
      queryParams.push(`q=${searchQuery}`);
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [genderFilter, searchQuery]);

  const clearFilters = () => {
    setGenderFilter(null);
    setSearchQuery("");
  };

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${!genderFilter && !searchQuery ? "how-active1" : ""}`}
                onClick={clearFilters}
              >
                All Products
              </button>

              <button
  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${genderFilter === "women" ? "how-active1" : ""}`}
  onClick={() => {
    setGenderFilter("women");
    console.log("Filter Women clicked");
    console.log(genderFilter);
  }}
>
  Women
</button>



              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${genderFilter === "man" ? "how-active1" : ""}`}
                onClick={() => setGenderFilter("man")}
              >
                Men
              </button>

             
              
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>

           
            <div className="panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            {products.length === 0 && <p>There are no results with your search.</p>}
            {products.map((product) => (
              <div
                key={product.id}
                className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.gender.toLowerCase()}`}
              >
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img src={product.img} alt={`IMG-${product.name}`} />

                    <Link href={`/shop/${product.id}`}>
  <a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
    <span>View Details</span>
  </a>
</Link>


                  </div>

                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <a
                        href="product-detail.html"
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        {product.name}
                      </a>

                      <span className="stext-105 cl3">{product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
              1
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              3
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
