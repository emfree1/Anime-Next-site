import styled from "styled-components";
import Breakpoints from "../../constans/breakpoints";

export const Title = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: var(--black);
  cursor: pointer;
  text-decoration: none;
`

export const SearchBlock = styled.div`
  max-width: 362px;
  width: 100%;
  padding: 9px 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--gray);
  border-radius: 30px;
  cursor: pointer;

  @media (max-width: ${Breakpoints.sm}) {
    margin: 0 15px;
  }
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: var(--gray-2);
  margin-left: 6px;
`

export const DateNow = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5A5A5A;

  @media (max-width: ${Breakpoints.sm}) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`
export const HeaderStyles = styled.header`
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
`

export const IconSearchStyles = styled.img`
  width: 17px;
  height: 17px;
`
export const DateToDay = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5A5A5A;
  text-decoration: underline;
`
export const MobileDate = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5A5A5A;
  display: none;
  white-space: nowrap;

  @media (max-width: ${Breakpoints.sm}) {
    display: block;
  }
`
