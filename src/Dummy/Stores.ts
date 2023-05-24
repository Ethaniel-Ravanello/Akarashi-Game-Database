interface Stores {
  platform: string;
  image: string;
  popular_items: string;
  game1: {
    name: string;
    player: string;
    id: number;
  };
  game2: {
    name: string;
    player: string;
    id: number;
  };
  game3: {
    name: string;
    player: string;
    id: number;
  };
}

const Stores: Stores[] = [
  {
    platform: "Steam",
    image: "https://wallpapercave.com/wp/wp11318812.jpg",
    popular_items: "1,308",
    game1: {
      name: "Grand Theft Auto V",
      player: "19,394",
      id: 3498,
    },
    game2: {
      name: "The Witcher 3: Wild Hunt",
      player: "18,572",
      id: 3228,
    },
    game3: {
      name: "Counter-Strike: Global Offensive",
      player: "15,182",
      id: 4291,
    },
  },

  {
    platform: "Playstation Stores",
    image: "https://wallpapercave.com/wp/wp9041296.jpg",
    popular_items: "579",
    game1: {
      name: "God Of War: Ragnarok",
      player: "18,569",
      id: 494384,
    },
    game2: {
      name: "The Witcher 3: Wild Hunt",
      player: "18,572",
      id: 3228,
    },
    game3: {
      name: "Portal 2",
      player: "14,632",
      id: 4200,
    },
  },
  {
    platform: "XBOX Store",
    image:
      "https://wallpapersmug.com/download/1024x768/cc9656/halo-infinite-2020-soldier.jpg",
    popular_items: "2,209",
    game1: {
      name: "Grand Theft Auto V",
      player: "19,394",
      id: 3498,
    },
    game2: {
      name: "The Witcher 3: Wild Hunt",
      player: "18,572",
      id: 3228,
    },
    game3: {
      name: "Portal 2",
      player: "14,632",
      id: 4200,
    },
  },
  {
    platform: "App Store",
    image: "https://wallpapercave.com/wp/wp11520704.jpg",
    popular_items: "75,053",
    game1: {
      name: "Tomb Raider (2013)",
      player: "9.308",
      id: 5286,
    },
    game2: {
      name: "Bioshock Infinite",
      player: "14,151",
      id: 4062,
    },
    game3: {
      name: "Borderlands 2",
      player: "13,990",
      id: 802,
    },
  },
];
