interface Tags {
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

const Tags: Tags[] = [
  {
    platform: "Singleplayer",
    image:
      "https://images.hdqwalls.com/download/shionne-tales-of-arise-zr-1280x720.jpg",
    popular_items: "120,456",
    id: 31,
    games: [
      {
        name: "Elden Ring",
        player: "5,833",
        id: 326243,
      },
      {
        name: "Bloodborne",
        player: "8,098",
        id: 3387,
      },
      {
        name: "NieR:Automata",
        player: "7,772",
        id: 10141,
      },
    ],
  },
  {
    platform: "Mulitplayer",
    image: "https://wallpaperaccess.com/full/662210.png",
    popular_items: "10,567",
    id: 7,
    games: [
      {
        name: "Valorant",
        player: "763",
        id: 415171,
      },
      {
        name: "Counter-Strike: Global Offensive",
        player: "15,182",
        id: 4291,
      },
      {
        name: "Splatoon 3",
        player: "132",
        id: 558975,
      },
    ],
  },
  {
    platform: "RPG",
    image: "https://wallpapercave.com/wp/xvUeEkP.jpg",
    popular_items: "2,209",
    id: 24,
    games: [
      {
        name: "The Elder Scroll V: Skyrim",
        player: "14,658",
        id: 5679,
      },
      {
        name: "Disco Elysium",
        player: "6,389",
        id: 262382,
      },
      {
        name: "Tale Of Arises",
        player: "1,321",
        id: 326244,
      },
    ],
  },
  {
    platform: "Exploration",
    image: "https://wallpapercave.com/wp/wp7648520.jpg",
    popular_items: "879",
    id: 6,
    games: [
      {
        name: "Star Wars Jedi: Survivor",
        player: "483",
        id: 793647,
      },
      {
        name: "Sons of the forest",
        player: "214",
        id: 398405,
      },
      {
        name: "Hogwarts Legacy",
        player: "1,690",
        id: 398405,
      },
    ],
  },
];

export default Tags;
