import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AnimeImage,
  AnimeLink,
  Container,
  Episode,
  ImageWrapper,
  Movie,
  MovieInfo,
  Point,
  SearchInfo,
  Status,
  Title,
  Wrapper,
} from './searchItem.styled';
import { SearchProps } from '../../interfaces/search';
import NextPageIcon from '../../assets/icons/nextPage.svg';

export const SearchItem: React.FC<SearchProps> = ({
  id,
  clasName,
  title,
  image,
  status,
  type,
  episodes,
  mal_id,
}) => (
  <Link href={`anime/${id}`} className={clasName}>
    <AnimeLink>
      <Container>
        <Wrapper>
          <ImageWrapper>
            <AnimeImage src={image} alt="anime-image" />
          </ImageWrapper>
          <SearchInfo>
            <Title>{title}</Title>
            <MovieInfo>
              <Movie>
                {type}
                <Point />
              </Movie>
              <Episode>
                {episodes} <Point />
              </Episode>
              <Status> {status}</Status>
            </MovieInfo>
          </SearchInfo>
        </Wrapper>
        <Image src={NextPageIcon} alt="next-page-icon" />
      </Container>
    </AnimeLink>
  </Link>
);
