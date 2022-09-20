import styled from "styled-components";
import React from "react";

const ErrorMessage = styled.p`
  padding: 50px 0;
  text-align: center;
`

export const SearchErrorMessage: React.FC<{ searchText: string }> = ({searchText}) => {
  return (
    <>
      {searchText && (
        <ErrorMessage>
          Oops it seems there is nothing for&nbsp; {searchText}
        </ErrorMessage>
      )}
    </>
  )
}
