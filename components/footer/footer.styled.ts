import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  border-top: 1px solid #DDDDDD;
  padding: 27px 0;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
`
export const Description = styled.p`
  font-weight: 500;
  max-width: 240px;
  font-size: 12px;
  line-height: 15px;
  color: #929292;
`

export const ArrowTopStyles = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: .2s ease;

  &:hover {
    transform: scale(1.2);
  }
`

