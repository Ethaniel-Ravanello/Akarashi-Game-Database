interface Stores {
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

const Stores: Stores[] = [
  {
    platform: "Steam",
    image:
      "https://www.hdwallpaper.nu/wp-content/uploads/2017/02/halflife_2-10.jpg",
    popular_items: "1,308",
    id: 1,
    games: [
      {
        name: "Grand Theft Auto V",
        player: "19,394",
        id: 3498,
      },
      {
        name: "The Witcher 3: Wild Hunt",
        player: "18,572",
        id: 3228,
      },
      {
        name: "Counter-Strike: Global Offensive",
        player: "15,182",
        id: 4291,
      },
    ],
  },
  {
    platform: "Playstation Stores",
    image: "https://images7.alphacoders.com/749/thumb-1920-749807.png",
    popular_items: "579",
    id: 3,
    games: [
      {
        name: "God Of War: Ragnarok",
        player: "18,569",
        id: 494384,
      },
      {
        name: "The Witcher 3: Wild Hunt",
        player: "18,572",
        id: 3228,
      },
      {
        name: "Portal 2",
        player: "14,632",
        id: 4200,
      },
    ],
  },
  {
    platform: "XBOX Store",
    image: "https://wallpapercave.com/wp/wp1905495.jpg",
    popular_items: "2,209",
    id: 2,
    games: [
      {
        name: "Grand Theft Auto V",
        player: "19,394",
        id: 3498,
      },
      {
        name: "The Witcher 3: Wild Hunt",
        player: "18,572",
        id: 3228,
      },
      {
        name: "Portal 2",
        player: "14,632",
        id: 4200,
      },
    ],
  },
  {
    platform: "App Store",
    image: "https://wallpapercave.com/wp/7zrUXEH.jpg",
    popular_items: "75,053",
    id: 4,
    games: [
      {
        name: "Tomb Raider (2013)",
        player: "9.308",
        id: 5286,
      },
      {
        name: "Bioshock Infinite",
        player: "14,151",
        id: 4062,
      },
      {
        name: "Borderlands 2",
        player: "13,990",
        id: 802,
      },
    ],
  },
];

export default Stores;
