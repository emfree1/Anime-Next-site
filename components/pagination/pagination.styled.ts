import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ButtonLink = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EBEBEB;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: .2s ease;

  &:hover {
    transform: scale(1.2);
  }
`

export const CurrentPage = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
  padding: 0 12px;
`
