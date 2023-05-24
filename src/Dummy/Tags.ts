interface Tags {
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

const Tags: Tags[] = [
  {
    platform: "Singleplayer",
    image: "https://wallpapercave.com/wp/wp11318812.jpg",
    popular_items: "120,456",
    game1: {
      name: "Elden Ring",
      player: "5,833",
      id: 326243,
    },
    game2: {
      name: "Bloodborne",
      player: "8,098",
      id: 3387,
    },
    game3: {
      name: "NieR:Automata",
      player: "7,772",
      id: 10141,
    },
  },

  {
    platform: "Mulitplayer",
    image: "https://wallpapercave.com/wp/wp9041296.jpg",
    popular_items: "10,567",
    game1: {
      name: "Valorant",
      player: "763",
      id: 415171,
    },
    game2: {
      name: "Counter-Strike: Global Offensive",
      player: "15,182",
      id: 4291,
    },
    game3: {
      name: "Splatoon 3",
      player: "132",
      id: 558975,
    },
  },
  {
    platform: "RPG",
    image:
      "https://wallpapersmug.com/download/1024x768/cc9656/halo-infinite-2020-soldier.jpg",
    popular_items: "2,209",
    game1: {
      name: "The Elder Scroll V: Skyrim",
      player: "14,658",
      id: 5679,
    },
    game2: {
      name: "Disco Elysium",
      player: "6,389",
      id: 262382,
    },
    game3: {
      name: "Tale Of Arises",
      player: "1,321",
      id: 326244,
    },
  },
  {
    platform: "Exploration",
    image: "https://wallpapercave.com/wp/wp11520704.jpg",
    popular_items: "879",
    game1: {
      name: "Star Wars Jedi: Survivor",
      player: "483",
      id: 793647,
    },
    game2: {
      name: "Sons of the forest",
      player: "214",
      id: 398405,
    },
    game3: {
      name: "Hogwarts Legacy",
      player: "1,690",
      id: 398405,
    },
  },
];
