import styled from "styled-components";
import Breakpoints from "../../constans/breakpoints";

export const Content = styled.div`
  width: 100%;
  overflow: auto;
  min-height: calc(100vh - 164px);
  padding: 40px 0 33px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38px 54px;

  @media (max-width: ${Breakpoints.sm}) {
    align-items: center;
    flex-direction: column;
    padding: 17px 0;
  }
`
