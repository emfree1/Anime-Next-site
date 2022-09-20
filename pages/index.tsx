import type {NextPage} from 'next'
import Head from 'next/head'
import {useState} from "react";
import Header from "../components/header";
import GlobalStyle from "../styles/global.styled";
import Footer from "../components/footer";
import Main from "../components/main";
import {PopupSearch} from "../components/popupSearch";
import {HomeProps} from "../interfaces/home";

const Home: NextPage<HomeProps> = ({dataList}) => {
  const [isPopup, setIsPopup] = useState(false)

  return (
    <div>
      <Head>
        <title>Anime list</title>
        <meta name="Anime list" content="Anime"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <GlobalStyle/>
      <PopupSearch isPopup={isPopup} setIsPopup={setIsPopup}/>
      <Header isPopup={isPopup} setIsPopup={setIsPopup}/>
      <main>
        <Main dataList={dataList}/>
      </main>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context: any) {

  const currentPage = context.query.page || 1;

  const res = await fetch(`https://api.jikan.moe/v4/anime?limit=9&page=${currentPage}`)
  const dataList = await res.json()

  return {
    props: {dataList},
  }
}

export default Home
