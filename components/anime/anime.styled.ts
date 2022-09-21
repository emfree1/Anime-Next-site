import styled, { css } from 'styled-components';
import Breakpoints from '../../constans/breakpoints';

export const Container = styled.div`
  max-width: 201px;
  width: 100%;
  height: 282px;
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${Breakpoints.sm}) {
    width: 100%;
    max-width: 361px;
    height: 508px;
  }
`;

export const Item = styled.div<{ bgImage?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ bgImage }) =>
    bgImage &&
    css`
      background-image: url(${bgImage});
    `};
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--white);

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const LinkAnime = styled.a`
  text-decoration: none;
  transition: 0.4s ease;
  cursor: pointer;
`;
