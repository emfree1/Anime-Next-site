import styled from "styled-components";
import Breakpoints from "../constans/breakpoints";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;


  @media (max-width: ${Breakpoints.sm}) {
    padding: 0;
  }
`

export const BackMainPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.sm}) {
    margin: 25px 0;
  }
`

export const BackMainPageText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
  margin-left: 15px;
`

export const AnimeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`

export const AnimeInfoMainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  @media (max-width: ${Breakpoints.sm}) {
    flex-direction: column;
  }
`

export const AnimeImageContainer = styled.div`
  max-width: 270px;
  height: 330px;
  width: 100%;

  @media (max-width: ${Breakpoints.sm}) {
    max-width: initial;
  }
`

export const AnimeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  @media (max-width: ${Breakpoints.sm}) {
    object-fit: cover;
  }
`

export const AnimeInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const AnimeInfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 53px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: var(--black);
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  svg {
    margin-left: 10px;
  }
`

export const CharacteristicsAnime = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 23px;
`

export const AnimeType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Type = styled.h6`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #A7A7A7;
`

export const TypeText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--black);
  white-space: nowrap;
`

export const Line = styled.p`
  height: 1px;
  width: 100%;
  margin: 0 10px;
  background: #D9D9D9;
`

export const RatingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const RatingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const RatingTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  color: #B9B9B9;
`

export const Rating = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  color: var(--black);
`

export const AnimeInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InfoDescriptionTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
`

export const InfoDescription = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: var(--black);
`

export const StatusIconStyles = styled.img`
  margin-left: 11px;
`

