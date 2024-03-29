import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import BlogItem from "../components/BlogItem";
import PageTitle from "../components/PageTitle";
import ProductItem from "../components/ProductItem";
import React from "react";
import { BlogType, ProductType } from "../types";
import { useRouter } from "next/router";
import { type } from "os";

interface Props {
  dataBlogs: BlogType[];
  dataProducts: ProductType[];
}

const Search: NextPage<Props> = ({ dataBlogs, dataProducts }) => {
  const router = useRouter();
  const { query } = router.query;
  const searchQuery = Array.isArray(query) ? query[0] : query || "";

  const filteredBlogs = dataBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const filteredProducts = dataProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <>
      <Head>
        <title>Store - Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="Search Page" />

      <div className="bg0 m-t-23 p-b-140 mt-5">
        <div className="container">
          {/* blogs  */}
          <>
            <h2 className="mb-5">Blogs</h2>
            <div className="row isotope-grid">
              {/* blog skeleton - search result */}
              <div className="col-12">
                <div className="row">
                  {filteredBlogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                  ))}
                </div>
              </div>
              {/* !! */}
            </div>
          </>

          {/* products */}
          <>
            <h2 className="mb-5">Products</h2>
            <div className="row isotope-grid">
              {/* product skeleton */}
              {filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}

              {/* !! */}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
  const resBlog = await fetch(`http://localhost:5001/blogs`);
  const dataBlog: BlogType[] = await resBlog.json();

  if (!dataBlog) {
    return {
      notFound: true,
    };
  }

  const resProduct = await fetch(`http://localhost:5001/products`);
  const dataProduct: ProductType[] = await resProduct.json();

  return {
    props: {
      dataBlogs: dataBlog,
      dataProducts: dataProduct,
    },
  };
};
