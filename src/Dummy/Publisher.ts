interface Publishers {
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
const Publishers: Publishers[] = [
  {
    platform: "Electronic Arts",
    image: "https://wallpapercave.com/wp/wp11318812.jpg",
    popular_items: "1,308",
    game1: {
      name: "Portal 2",
      player: "14,632",
      id: 4200,
    },
    game2: {
      name: "Left 4 Dead 2",
      player: "14,727",
      id: 12020,
    },
    game3: {
      name: "Apex Legends",
      player: "9,908",
      id: 290856,
    },
  },

  {
    platform: "Square Enix",
    image: "https://wallpapercave.com/wp/wp9041296.jpg",
    popular_items: "579",
    game1: {
      name: "Tomb Raider (2013)",
      player: "9.308",
      id: 5286,
    },
    game2: {
      name: "Life Is Strange",
      player: "13,989",
      id: 3439,
    },
    game3: {
      name: "Rise Of Tomb Raider",
      player: "10,812",
      id: 7689,
    },
  },
  {
    platform: "Ubisoft Entertainment",
    image:
      "https://wallpapersmug.com/download/1024x768/cc9656/halo-infinite-2020-soldier.jpg",
    popular_items: "2,209",
    game1: {
      name: "Far Cry 3",
      player: "9.311",
      id: 4161,
    },
    game2: {
      name: "For Honor",
      player: "8,633",
      id: 5286,
    },
    game3: {
      name: "Assasin Creed IV: Black Flag",
      player: "8,551",
      id: 3841,
    },
  },
  {
    platform: "Microsoft Studios",
    image: "https://wallpapercave.com/wp/wp11520704.jpg",
    popular_items: "493",
    game1: {
      name: "Alan Wake",
      player: "9.176",
      id: 19487,
    },
    game2: {
      name: "Rise Of Tomb Raider",
      player: "10,812",
      id: 7689,
    },
    game3: {
      name: "Limbo",
      player: "12,490",
      id: 1030,
    },
  },
];
