import React from 'react';
import { AnimeRatingProps } from '../../interfaces/animeRating';
import { RatingItem, RatingTitle, Score } from '../../styles/animePage.styled';

export const Rating: React.FC<AnimeRatingProps> = ({ score, rank, popularity }) => {
  const ratings = [
    { title: 'Score', value: score },
    { title: 'Rank', value: rank },
    { title: 'Popularity', value: popularity },
  ];

  return (
    <>
      {ratings.map(({ title, value }, index) => (
        <RatingItem key={index + title}>
          <Score>{value}</Score>
          <RatingTitle>{title}</RatingTitle>
        </RatingItem>
      ))}
    </>
  );
};
