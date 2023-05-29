interface Tags {
  platform: string;
  image: string;
  popular_items: string;
  id: number;
  games: {
    name: string;
    added: string;
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
        added: "5,833",
        id: 326243,
      },
      {
        name: "Bloodborne",
        added: "8,098",
        id: 3387,
      },
      {
        name: "NieR:Automata",
        added: "7,772",
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
        added: "763",
        id: 415171,
      },
      {
        name: "Counter-Strike: Global Offensive",
        added: "15,182",
        id: 4291,
      },
      {
        name: "Splatoon 3",
        added: "132",
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
        added: "14,658",
        id: 5679,
      },
      {
        name: "Disco Elysium",
        added: "6,389",
        id: 262382,
      },
      {
        name: "Tale Of Arises",
        added: "1,321",
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
        added: "483",
        id: 793647,
      },
      {
        name: "Sons of the forest",
        added: "214",
        id: 398405,
      },
      {
        name: "Hogwarts Legacy",
        added: "1,690",
        id: 906547,
      },
    ],
  },
];

export default Tags;
