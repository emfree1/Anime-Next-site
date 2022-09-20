import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {GetServerSideProps, NextPage} from "next";
import GlobalStyle, {Container} from "../../styles/global.styled";
import BackToHomePageIcon from '../../assets/icons/backArrow.svg';
import StatusIcon from '../../assets/icons/status.svg';
import {
  AnimeImage,
  AnimeImageContainer,
  AnimeInfoBlock,
  AnimeInfoDescription,
  AnimeInfoMainContent,
  AnimeInfoTitle,
  AnimeInfoWrapper,
  BackMainPage,
  BackMainPageText,
  CharacteristicsAnime,
  Content,
  InfoDescription,
  InfoDescriptionTitle,
  Page,
  Rating,
  RatingBlock,
  RatingItem,
  RatingTitle,
  StatusIconStyles,
  Title
} from "../../styles/animePage.styled";
import {AnimePageProps} from "../../interfaces/animePage";
import {AnimeTypeList} from "../../components/animeTypeList";

const AnimePage: NextPage<AnimePageProps> = ({data}) => {
  const route = useRouter()

  const {mal_id, popularity, images, status, title, type, source, episodes, score, rank} = data

  return (
    <div>
      <Head>
        <title>Anime Page</title>
        <meta name="Anime Page" content="Anime"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <GlobalStyle/>
      <Page>
        <Container>
          <Content>
            <BackMainPage onClick={() => route.push('/')}>
              <Image src={BackToHomePageIcon} alt='arrow-icon'/>
              <BackMainPageText>Go back to Main</BackMainPageText>
            </BackMainPage>
            <AnimeInfoWrapper key={mal_id}>
              <AnimeInfoMainContent>
                <AnimeImageContainer>
                  <AnimeImage src={images?.jpg.large_image_url} alt='image-anime'/>
                </AnimeImageContainer>
                <AnimeInfoBlock>
                  <AnimeInfoTitle>
                    <Title>{title} <StatusIconStyles src={StatusIcon.src} alt='status-icon'/> </Title>
                    <CharacteristicsAnime>
                      <AnimeTypeList type={type} episodes={episodes} source={source} status={status}/>
                    </CharacteristicsAnime>
                    <RatingBlock>
                      <RatingItem>
                        <Rating>{score}</Rating>
                        <RatingTitle>Score</RatingTitle>
                      </RatingItem>
                      <RatingItem>
                        <Rating>{rank}</Rating>
                        <RatingTitle>Rank</RatingTitle>
                      </RatingItem>
                      <RatingItem>
                        <Rating>{popularity}</Rating>
                        <RatingTitle>Popularity</RatingTitle>
                      </RatingItem>
                    </RatingBlock>
                  </AnimeInfoTitle>
                </AnimeInfoBlock>
              </AnimeInfoMainContent>
              <AnimeInfoDescription>
                <InfoDescriptionTitle>Description</InfoDescriptionTitle>
                <InfoDescription>
                  A special anime featuring a battle against the Colossal Titan screened at
                  the
                  Tokyo Skytree. In the short, the characters from Shingeki no Kyojin are part
                  of
                  the Sky Survey Corps, protecting the Wall Skytree, a section of the walled
                  city
                  that contains the Skytree. The Sky Survey Corps find that the Wall Skytree
                  is
                  under attack by an army of titans, including a giant 350 meter-class titan
                  that
                  has suddenly appeared next to the Skytree and remains motionless. (Source:
                  Anime
                  Now!)</InfoDescription>
              </AnimeInfoDescription>
            </AnimeInfoWrapper>
          </Content>
        </Container>
      </Page>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {

  const id = context.query.id

  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const {data} = await res.json()

  return {
    props: {data},
  }
}

export default AnimePage
