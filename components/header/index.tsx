import React from 'react';
import Link from 'next/link';
import {
  Content,
  DateNow,
  DateToDay,
  MobileDate,
  SearchBlock,
  StyledHeader,
  StyledIconSearch,
  Text,
  Title,
} from './header.styled';
import { HeaderProps } from '../../interfaces/header';
import { Container } from '../../styles/global.styled';
import SearchIcon from '../../assets/icons/search.svg';
import { getLocaleDate } from '../../helpers/get-locale-date';

const Header: React.FC<HeaderProps> = ({ setIsPopupOpen }) => {
  const { day, month, shortMonth } = getLocaleDate();

  return (
    <StyledHeader>
      <Container>
        <Content>
          <Link href="/" passHref>
            <Title>Anime</Title>
          </Link>
          <SearchBlock onClick={() => setIsPopupOpen(true)}>
            <StyledIconSearch src={SearchIcon.src} alt="search-icon" />
            <Text>Search...</Text>
          </SearchBlock>
          <DateNow>
            Today is the&nbsp;
            <DateToDay as="span">
              {day}th of {month}
            </DateToDay>
          </DateNow>
          <MobileDate>{shortMonth + ` ${day}` + 'th'}</MobileDate>
        </Content>
      </Container>
    </StyledHeader>
  );
};

export default Header;
