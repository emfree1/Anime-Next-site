import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimeImage,
  Container,
  Episode,
  ImageWrapper,
  LinkAnime,
  Movie,
  MovieInfo,
  Point,
  SearchInfo,
  Status,
  Title,
  Wrapper
} from "./searchItem.styled";
import {SearchItemProps} from "../../interfaces/search";
import NextPageIcon from '../../assets/icons/nextPage.svg'

export const SearchItem: React.FC<SearchItemProps> = ({id, clasName, title, image, status, type, episodes, mal_id}) => (
  <Link href={`anime/${id}`} className={clasName}>
    <LinkAnime>
      <Container>
        <Wrapper>
          <ImageWrapper>
            <AnimeImage src={image} alt='anime-image'/>
          </ImageWrapper>
          <SearchInfo>
            <Title>{title}</Title>
            <MovieInfo>
              <Movie>{type}<Point/></Movie>
              <Episode>{episodes} <Point/></Episode>
              <Status> {status}</Status>
            </MovieInfo>
          </SearchInfo>
        </Wrapper>
        <Image src={NextPageIcon} alt='next-page-icon'/>
      </Container>
    </LinkAnime>
  </Link>
)
