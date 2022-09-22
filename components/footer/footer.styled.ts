import styled from 'styled-components';
import { Container } from '../../styles/global.styled';

export const Content = styled(Container)`
  width: 100%;
  border-top: 1px solid var(--border-color);
  padding: 27px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
`;
export const Description = styled.p`
  font-weight: 500;
  max-width: 240px;
  font-size: 12px;
  line-height: 15px;
  color: var(--gray-3);
`;

export const ArrowTopStyles = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
