import React from "react";
import {useRouter} from "next/router";
import {ButtonLink, ButtonWrapper, CurrentPage} from "./pagination.styled";
import {PaginationProps} from "../../interfaces/pagination";
import NextArrow from '../../assets/icons/nextArrow.svg'
import PrevArrow from '../../assets/icons/prevArrow.svg'

import Image from "next/image";

export const Pagination: React.FC<PaginationProps> = ({currentPage, hasNextPage}) => {
  const router = useRouter()

  const handleChangePage = (isNext: boolean) => {
    const newPage = isNext ? currentPage + 1 : currentPage - 1;
    router.push(`/?page=${newPage}`).catch(e => console.log(e))
  }

  return (
    <ButtonWrapper>
      <ButtonLink onClick={() => handleChangePage(false)} disabled={currentPage === 1}>
        <Image src={PrevArrow} alt='prev-arrow-icon'/>
      </ButtonLink>
      <CurrentPage>{currentPage}</CurrentPage>
      <ButtonLink onClick={() => handleChangePage(true)} disabled={!hasNextPage}>
        <Image src={NextArrow} alt='next-arrow-icon'/>
      </ButtonLink>
    </ButtonWrapper>
  )
}
