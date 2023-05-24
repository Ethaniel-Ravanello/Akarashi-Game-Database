interface Data {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: Array<Object>;
  genres: Array<Object>;
  esrb_rating: Object;
  released: string;
  added: number;
}

export type { Data };
