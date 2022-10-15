import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import microCmsClient from "../utils/micro-cms";
import { EndPoints } from "../types/cms-response";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Keyvisual from "../components/Keyvisual";
import NewsList from "../components/NewsList";
import PictureGrid from "../components/PictureGrid";
import Container from "../components/Container";
import Title from "../components/Title";
import Access from "../components/Access";

type Props = {
  news: EndPoints["gets"]["news"];
};


export default function Home({...props} : Props) {

  return (
      <Container>
        <Header />
        <div className={styles.layoutType01}> 
          <Keyvisual reverse={true} />
          <Title ja="ニュース" en="News" />
        </div>

        <NewsList news={props.news} />
      </Container>
  )
}

export async function getStaticProps() {
  const res = await microCmsClient
    .get({
      endpoint: "news",
    })
    .catch((err) => console.log(err));
  console.log(res);

  return {
    props: {
      news: res || null,
    },
    revalidate: 10,
  };
}
