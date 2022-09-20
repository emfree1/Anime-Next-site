import styled from "styled-components";

export const Popup = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: absolute;
`

export const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`

export const InputContainer = styled.div`
  max-width: 618px;
  width: 100%;
  height: 64px;
  border-radius: 32px;
  padding: 0 15px;
  position: absolute;
  z-index: 2;
  top: 178px;
  animation: isShowSearch .4s linear forwards;
  left: 50%;
  transform: translateX(-50%);

  @keyframes isShowSearch {

    0% {
      top: 50px;
      visibility: hidden;
      opacity: 1;
    }

    100% {
      top: 178px;
      visibility: visible;
      opacity: 1;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  outline: none;
  border: none;
  padding: 0 25px 0 35px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;

  &::placeholder {
    font-size: 16px;
    line-height: 19px;
    color: #B4B4B4;

  }
`

export const SearchListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 32px;
  top: 20px;

  a:last-child {
    margin-bottom: 35px;
  }
`

export const CloseIconStyles = styled.img`
  top: -25px;
  right: 15px;
  cursor: pointer;
  position: absolute;

`
