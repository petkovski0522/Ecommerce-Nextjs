import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryPicker from "../components/CategoryPicker";
import FeaturedBlogs from "../components/FeaturedBlogs";
import FeaturedProducts from "../components/FeaturedProducts";
import { BannerType, BlogType, ProductType } from "../types";

interface Props {
  dataBanner: BannerType;
  dataFeaturedProducts: ProductType[];
  dataFeaturedBlogs: BlogType[];
}

const Home: NextPage<Props> = ({
  dataBanner,
  dataFeaturedProducts,
  dataFeaturedBlogs,
}) => {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner {...dataBanner} />

      <CategoryPicker />

      <FeaturedProducts featuredProducts={dataFeaturedProducts} />

      <FeaturedBlogs featuredBlogs={dataFeaturedBlogs} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const resBanner = await fetch("http://localhost:5001/banner_content");
  const dataBanner: BannerType = await resBanner.json();

  const resFeaturedProducts = await fetch(
    "http://localhost:5001/products/?_limit=4"
  );
  const dataFeaturedProducts: ProductType = await resFeaturedProducts.json();

  const resFeaturedBlogs = await fetch("http://localhost:5001/blogs/?_limit=3");
  const dataFeaturedBlogs: BlogType = await resFeaturedBlogs.json();

  return {
    props: {
      dataBanner,
      dataFeaturedProducts,
      dataFeaturedBlogs,
    },
  };
};
