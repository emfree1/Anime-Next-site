import React from 'react';
import { AnimeListProps } from '../../interfaces/animeList';
import { AnimeType, Line, Type, TypeText } from '../../styles/animePage.styled';

export const AnimeTypeList: React.FC<AnimeListProps> = ({ type, source, episodes, status }) => {
  const types = [
    { name: 'Type', type: type },
    { name: 'Source', type: source },
    { name: 'Episodes', type: episodes },
    { name: 'Status', type: status },
  ];

  return (
    <>
      {types.map(({ name, type }, index) => (
        <AnimeType key={index + name}>
          <Type>{name}</Type>
          <Line />
          <TypeText>{type}</TypeText>
        </AnimeType>
      ))}
    </>
  );
};
