import React from "react";
import {Content} from "./main.styled";
import {Anime} from "../anime";
import {Pagination} from "../pagination";
import {Container} from "../../styles/global.styled";
import {HomeProps} from "../../interfaces/home";

const Main: React.FC<HomeProps> = ({dataList}) => {

  const {data, pagination} = dataList

  return (
    <Container maxWidth='772px'>
      <Content>
        {data.map(({mal_id, title, images}) => (
          <Anime key={mal_id} id={mal_id} title={title} bgImage={images?.jpg.large_image_url}/>
        ))}
        <Pagination currentPage={pagination.current_page} hasNextPage={pagination.has_next_page}/>
      </Content>
    </Container>
  )
}

export default Main
