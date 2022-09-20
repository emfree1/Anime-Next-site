import React, {useEffect, useState} from "react";
import {
  CloseIconStyles,
  Input,
  InputContainer,
  Popup,
  PopupBackground,
  SearchListContainer
} from "./popupSearch.styled";
import {SearchItem} from "../search/SearchItem";
import CloseIcon from '../../assets/icons/closeIcon.svg'
import {SearchErrorMessage} from "../search/SearchErrorMessage";
import {HeaderProps} from "../../interfaces/header";
import {PopupSearchItemType} from "../../interfaces/popupSearch";

export const PopupSearch: React.FC<HeaderProps> = ({setIsPopup, isPopup}) => {
  const [searchText, setSearchText] = useState('')
  const [searchList, setSearchList] = useState<PopupSearchItemType[] | []>([])

  const fetchApi = async (searchText: string) => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?limit=5&letter=${searchText}`)
      const {data} = await res.json()
      setSearchList(data)
    } catch (e) {
      setSearchList([])
      console.log('e', e)
    }
  }

  useEffect(() => {

    if (searchText.length >= 2) {
      fetchApi(searchText)
    }

  }, [searchText])


  const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    let value = e.target.value.trim()

    setSearchText(value)

    if (!value) {
      setSearchText('')
      setSearchList([])
    }
  }

  const closePopup = () => {
    setSearchText('')
    setSearchList([])
    setIsPopup(false)
  }

  return (
    <>
      {isPopup &&
        <Popup>
          <InputContainer>
            <CloseIconStyles onClick={closePopup} src={CloseIcon.src} alt='close-icon'/>
            <Input onChange={handleValueInput}
                   value={searchText}
                   placeholder='You can search for ‘Kyoukai no Kanata’ for example'/>
            <SearchListContainer>
              {(searchList && searchList.length != 0) && (
                <>
                  {searchList?.map(({images, title, mal_id, episodes, status, type}) => (
                    <SearchItem
                      key={mal_id}
                      id={mal_id}
                      type={type}
                      status={status}
                      image={images?.jpg?.small_image_url}
                      title={title}
                      episodes={episodes}/>
                  ))}
                </>
              )}
              {(searchText.length >= 2 && searchList && searchList.length === 0) &&
                <SearchErrorMessage searchText={searchText}/>}
            </SearchListContainer>
          </InputContainer>
          <PopupBackground onClick={closePopup}/>
        </Popup>
      }
    </>
  )
}
