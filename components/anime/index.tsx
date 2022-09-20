import React from "react";
import Link from "next/link";
import {Container, Description, Item, LinkAnime} from "./anime.styled";
import {AnimeProps} from "../../interfaces/anime";

export const Anime: React.FC<AnimeProps> = ({title, bgImage, id}) => (
  <Container>
    <Link href={`anime/${id}`}>
      <LinkAnime>
        <Item bgImage={bgImage}>
          <Description>{title}</Description>
        </Item>
      </LinkAnime>
    </Link>
  </Container>
)
