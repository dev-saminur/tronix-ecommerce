import "./styles/globals.scss";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout/Layout";
import Category from "@/components/Category";
import NewArrival from "@/components/NewArrival";
import FlashSale from "@/components/FlashSale";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Category />
        <NewArrival />
        <FlashSale />
      </Layout>
    </>
  );
}
