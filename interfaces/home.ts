interface AnimeItemProps {
  mal_id?: string;
  title?: string;
  images?: {
    jpg: {
      large_image_url: string;
    };
  };
}

export interface HomeProps {
  dataList: {
    data: AnimeItemProps[];
    pagination: {
      current_page: number;
      has_next_page: boolean;
    };
  };
}
