import React, { useEffect, useState } from 'react';
import {
  Input,
  InputContainer,
  Popup,
  PopupBackground,
  SearchList,
  StyledCloseIcon,
} from './popupSearch.styled';
import { SearchItem } from '../search/SearchItem';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import { SearchErrorMessage } from '../search/SearchErrorMessage';
import { HeaderProps } from '../../interfaces/header';
import { PopupSearchProps } from '../../interfaces/popupSearch';
import { getData } from '../../helpers/fetch-data';

export const PopupSearch: React.FC<HeaderProps> = ({ isPopupOpen, setIsPopupOpen }) => {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState<PopupSearchProps[] | []>([]);

  const minLengthText = 2;

  const fetchApi = async (searchText: string) => {
    try {
      const { data } = await getData(`?limit=5&letter=${searchText}`);
      setSearchList(data);
    } catch (e) {
      setSearchList([]);
      console.log('e', e);
    }
  };

  useEffect(() => {
    if (searchText.length >= minLengthText) {
      fetchApi(searchText);
    }
  }, [searchText]);

  const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trimStart();

    if (!value) {
      setSearchText('');
      setSearchList([]);
      return;
    }

    setSearchText(value);
  };

  const closePopup = () => {
    setSearchText('');
    setSearchList([]);
    setIsPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <Popup>
          <InputContainer>
            <StyledCloseIcon onClick={closePopup} src={CloseIcon.src} alt="close-icon" />
            <Input
              onChange={handleValueInput}
              value={searchText}
              placeholder="You can search for ‘Kyoukai no Kanata’ for example"
            />
            <SearchList>
              {searchList &&
                searchList?.map(({ images, title, mal_id, episodes, status, type }) => (
                  <SearchItem
                    key={mal_id}
                    id={mal_id}
                    type={type}
                    status={status}
                    image={images?.jpg?.small_image_url}
                    title={title}
                    episodes={episodes}
                  />
                ))}
              {searchText.length >= minLengthText && !searchList.length && (
                <SearchErrorMessage searchText={searchText} />
              )}
            </SearchList>
          </InputContainer>
          <PopupBackground onClick={closePopup} />
        </Popup>
      )}
    </>
  );
};
