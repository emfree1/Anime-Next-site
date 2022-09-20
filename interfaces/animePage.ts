interface AnimePageItemType {
  popularity: string;
  rank?: string;
  score?: string
  status?: string;
  episodes?: string;
  source?: string;
  type?: string;
  mal_id?: string;
  title?: string;
  images?: {
    jpg: {
      large_image_url: string
    }
  };
}

export interface AnimePageProps {
  data: AnimePageItemType,
}
