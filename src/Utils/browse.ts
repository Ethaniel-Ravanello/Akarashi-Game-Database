interface PropsBrowse {
  platform: string;
  popular_items: string;
  image: string;
  id: number;
  games: {
    name: string;
    player: string;
    id: number;
  }[];
  onClick?: () => void;
}

export type { PropsBrowse };
