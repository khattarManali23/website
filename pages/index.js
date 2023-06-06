// import React from 'react'
import Head from "next/head";
import { HomePage } from "../components/home";
import Logo from "../assets/svg/Screenshotlogo.png";
import api from "../services/api";
import { useRouter } from "next/router";

export default function Home({ categories, news }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Screenshotlogo.png" />
      </Head>

      <section className="relative">
        <div className="">
          <HomePage allCategories={categories} allNews={news} />
        </div>
      </section>
    </>
  );
}

async function getAllCategories() {
  const response = await api.get("/category/all");
  const data = response?.data?.categorys;
  return data;
}
async function getAllNews() {
  const response = await api.get("/newsmanagement/all");
  const data = response?.data?.data;
  return data;
}

export async function getStaticProps() {
  const categories = await getAllCategories();

  const news = await getAllNews();
  return {
    props: {
      news,
      categories,
    },
  };
}
