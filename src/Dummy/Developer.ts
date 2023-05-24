interface Developer {
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

const Developer: Developer[] = [
  {
    platform: "Ubisoft",
    image: "https://wallpapercave.com/wp/wp11318812.jpg",
    popular_items: "334",
    game1: {
      name: "Assasing Creed IV: Black Flag",
      player: "9.308",
      id: 3841,
    },
    game2: {
      name: "Watch Dogs",
      player: "8,630",
      id: 3687,
    },
    game3: {
      name: "Far Cry 3",
      player: "8.549",
      id: 4161,
    },
  },

  {
    platform: "Electronic Arts",
    image: "https://wallpapercave.com/wp/wp9041296.jpg",
    popular_items: "325",
    game1: {
      name: "Dead Space (2008)",
      player: "8,588",
      id: 4570,
    },
    game2: {
      name: "Brutal Legend",
      player: "7,605",
      id: 5525,
    },
    game3: {
      name: "Battlefield 1",
      player: "6,905",
      id: 998,
    },
  },
  {
    platform: "Sony Interactive Entertainment",
    image:
      "https://wallpapersmug.com/download/1024x768/cc9656/halo-infinite-2020-soldier.jpg",
    popular_items: "552",
    game1: {
      name: "Bloodborne",
      player: "8,098",
      id: 3387,
    },
    game2: {
      name: "Journey",
      player: "7,889",
      id: 2354,
    },
    game3: {
      name: "Resident Evil 2 (1998)",
      player: "5,546",
      id: 5159,
    },
  },
  {
    platform: "Square Enix",
    image: "https://wallpapercave.com/wp/wp11520704.jpg",
    popular_items: "355",
    game1: {
      name: "Deus Ex Human Revolution",
      player: "9.799",
      id: 4440,
    },
    game2: {
      name: "NieR: Automata",
      player: "8,166",
      id: 10141,
    },
    game3: {
      name: "Just Cause 3",
      player: "8,166",
      id: 3017,
    },
  },
];
