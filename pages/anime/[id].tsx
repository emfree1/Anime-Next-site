import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import GlobalStyle, { Container } from '../../styles/global.styled';
import BackToHomePageIcon from '../../assets/icons/backArrow.svg';
import StatusIcon from '../../assets/icons/status.svg';
import {
  AnimeDetails,
  BackButton,
  CharacteristicsAnime,
  Content,
  Description,
  DetailsTitle,
  Image,
  ImageContainer,
  InfoBlock,
  InfoTitle,
  MainContent,
  Page,
  RatingBlock,
  StyledStatusIcon,
  Text,
  Title,
  Wrapper,
} from '../../styles/animePage.styled';
import { AnimePageProps } from '../../interfaces/animePage';
import { AnimeTypeList } from '../../components/animePage/AnimeTypeList';
import { getData } from '../../helpers/fetch-data';
import { Rating } from '../../components/animePage/Rating';

const AnimePage: NextPage<AnimePageProps> = ({ data }) => {
  const route = useRouter();

  const { mal_id, popularity, images, status, title, type, source, episodes, score, rank } = data;

  return (
    <div>
      <Head>
        <title>Anime Page</title>
        <meta name="Anime Page" content="Anime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Page>
        <Container>
          <Content>
            <BackButton onClick={() => route.push('/')}>
              <img src={BackToHomePageIcon.src} alt="arrow-icon" />
              <Text>Go back to Main</Text>
            </BackButton>
            <Wrapper key={mal_id}>
              <MainContent>
                <ImageContainer>
                  <Image src={images?.jpg.large_image_url} alt="image-anime" />
                </ImageContainer>
                <InfoBlock>
                  <InfoTitle>
                    <Title>
                      {title} <StyledStatusIcon src={StatusIcon.src} alt="status-icon" />
                    </Title>
                    <CharacteristicsAnime>
                      <AnimeTypeList
                        type={type}
                        episodes={episodes}
                        source={source}
                        status={status}
                      />
                    </CharacteristicsAnime>
                    <RatingBlock>
                      <Rating score={score} rank={rank} popularity={popularity} />
                    </RatingBlock>
                  </InfoTitle>
                </InfoBlock>
              </MainContent>
              <AnimeDetails>
                <DetailsTitle>Description</DetailsTitle>
                <Description>
                  A special anime featuring a battle against the Colossal Titan screened at the
                  Tokyo Skytree. In the short, the characters from Shingeki no Kyojin are part of
                  the Sky Survey Corps, protecting the Wall Skytree, a section of the walled city
                  that contains the Skytree. The Sky Survey Corps find that the Wall Skytree is
                  under attack by an army of titans, including a giant 350 meter-class titan that
                  has suddenly appeared next to the Skytree and remains motionless. (Source: Anime
                  Now!)
                </Description>
              </AnimeDetails>
            </Wrapper>
          </Content>
        </Container>
      </Page>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;

  const { data } = await getData(`/${id}`);

  return {
    props: { data },
  };
};

export default AnimePage;
