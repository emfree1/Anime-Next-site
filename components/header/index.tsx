import React from "react";
import Link from "next/link";
import {
  Content,
  DateNow,
  DateToDay,
  HeaderStyles,
  IconSearchStyles,
  MobileDate,
  SearchBlock,
  Text,
  Title
} from "./header.styled";
import {HeaderProps} from "../../interfaces/header";
import {Container} from "../../styles/global.styled";
import SearchIcon from "../../assets/icons/search.svg"

const Header: React.FC<HeaderProps> = ({setIsPopup, isPopup}) => {

  const date = new Date()
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const day = date.getDate()
  const month = date.toLocaleString(
    'en-US', {month: 'long'}
  );

  return (
    <HeaderStyles>
      <Container>
        <Content>
          <Link href='/' passHref>
            <Title>Anime</Title>
          </Link>
          <SearchBlock onClick={() => setIsPopup(!isPopup)}>
            <IconSearchStyles src={SearchIcon.src} alt='search-icon'/>
            <Text>Search...</Text>
          </SearchBlock>
          <DateNow>Today is the&nbsp;<DateToDay>{day}th of {month}</DateToDay></DateNow>
          <MobileDate>{monthNames[date.getMonth()] + ` ${day}` + 'th'}</MobileDate>
        </Content>
      </Container>
    </HeaderStyles>
  )
}

export default Header
