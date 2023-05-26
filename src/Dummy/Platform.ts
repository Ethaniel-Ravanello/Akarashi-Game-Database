interface Game {
  platform: string;
  image: string;
  popular_items: string;
  id: number;
  games: {
    name: string;
    player: string;
    id: number;
  }[];
}

const Platform: Game[] = [
  {
    platform: "PC",
    image:
      "https://wallsdesk.com/wp-content/uploads/2016/08/Counter-Strike-Global-Offensive-Wallpapers-and-Backgrounds.jpg",
    popular_items: "512,535",
    id: 4,
    games: [
      {
        name: "Counter Strike: Global Offensive",
        player: "19,389",
        id: 4291,
      },
      {
        name: "The Witcher 3: Wild Hunt",
        player: "18.569",
        id: 3328,
      },
      {
        name: "Portal 2",
        player: "17,499",
        id: 13536,
      },
    ],
  },
  {
    platform: "Playstation 4",
    image: "https://wallpapercave.com/wp/wp9041296.jpg",
    popular_items: "10,567",
    id: 18,
    games: [
      {
        name: "God Of War: Ragnarok",
        player: "18,569",
        id: 494384,
      },
      {
        name: "Uncharted 4: A Thief's End",
        player: "15,398",
        id: 2462,
      },
      {
        name: "Destiny 2",
        player: "12,355",
        id: 32,
      },
    ],
  },
  {
    platform: "XBOX 1 X/S",
    image:
      "https://wallpapersmug.com/download/1024x768/cc9656/halo-infinite-2020-soldier.jpg",
    popular_items: "2,209",
    id: 1,
    games: [
      {
        name: "Halo Infinite",
        player: "18,835",
        id: 58751,
      },
      {
        name: "Forza Horizon 4",
        player: "11,108",
        id: 58753,
      },
      {
        name: "Titanfall 2",
        player: "8,387",
        id: 923,
      },
    ],
  },
  {
    platform: "Nintendo Switch",
    image: "https://wallpapercave.com/wp/7K7LOUq.jpg",
    popular_items: "879",
    id: 7,
    games: [
      {
        name: "Bayonetta 2",
        player: "12.238",
        id: 23760,
      },
      {
        name: "The Legend Of Zelda: Breath Of The Wild",
        player: "19.823",
        id: 22511,
      },
      {
        name: "Animal Crossing",
        player: "4,263",
        id: 54346,
      },
    ],
  },
];

export default Platform;
