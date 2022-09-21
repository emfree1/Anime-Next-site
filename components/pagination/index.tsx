import React from 'react';
import { useRouter } from 'next/router';
import { Button, Container, CurrentPage } from './pagination.styled';
import { PaginationProps } from '../../interfaces/pagination';
import NextArrow from '../../assets/icons/nextArrow.svg';
import PrevArrow from '../../assets/icons/prevArrow.svg';

import Image from 'next/image';

export const Pagination: React.FC<PaginationProps> = ({ currentPage, hasNextPage }) => {
  const router = useRouter();

  const handleChangePage = (isNext: boolean) => {
    const newPage = isNext ? currentPage + 1 : currentPage - 1;
    router.push(`/?page=${newPage}`).catch((e) => console.log(e));
  };

  return (
    <Container>
      <Button onClick={() => handleChangePage(false)} disabled={currentPage === 1}>
        <Image src={PrevArrow} alt="prev-arrow-icon" />
      </Button>
      <CurrentPage>{currentPage}</CurrentPage>
      <Button onClick={() => handleChangePage(true)} disabled={!hasNextPage}>
        <Image src={NextArrow} alt="next-arrow-icon" />
      </Button>
    </Container>
  );
};
