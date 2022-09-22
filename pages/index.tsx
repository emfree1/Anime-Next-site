import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/header';
import GlobalStyle from '../styles/global.styled';
import Footer from '../components/footer';
import Main from '../components/main';
import { PopupSearch } from '../components/popupSearch';
import { HomeProps } from '../interfaces/home';
import { getData } from '../helpers/fetch-data';

const Home: NextPage<HomeProps> = ({ dataList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Anime list</title>
        <meta name="Anime list" content="Anime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <PopupSearch isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      <Header setIsPopupOpen={setIsPopupOpen} />
      <main>
        <Main dataList={dataList} />
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const currentPage = context.query.page || 1;

  const dataList = await getData(`?limit=9&page=${currentPage}`);

  return {
    props: { dataList },
  };
}

export default Home;
