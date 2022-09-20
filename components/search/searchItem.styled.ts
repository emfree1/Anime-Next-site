import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 35px 0;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`

export const AnimeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`


export const SearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  max-width: 230px;
`

export const Title = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`

export const MovieInfo = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
`

export const Movie = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #757575;
  display: flex;
  align-items: center;
`

export const Point = styled.span`
  width: 2px;
  height: 2px;
  border-radius: 100%;
  background-color: #757575;
  margin-left: 5px;

`

export const Episode = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #757575;
  margin-right: 5px;
  display: flex;
  align-items: center;
`

export const Status = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #757575;
`

export const LinkAnime = styled.a`
  text-decoration: none;
  cursor: pointer;
`
