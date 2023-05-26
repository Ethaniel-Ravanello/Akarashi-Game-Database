interface Developer {
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

const Developer: Developer[] = [
  {
    platform: "Ubisoft",
    image: "https://img.wallpapersafari.com/desktop/1440/900/22/91/xNYv8a.jpg",
    popular_items: "334",
    id: 405,
    games: [
      {
        name: "Assasing Creed IV: Black Flag",
        added: "9,308",
        id: 3841,
      },
      {
        name: "Watch Dogs",
        added: "8,630",
        id: 3687,
      },
      {
        name: "Far Cry 3",
        added: "8,549",
        id: 4161,
      },
    ],
  },
  {
    platform: "Electronic Arts",
    image:
      "https://www.wallpaperbetter.com/wallpaper/476/1013/99/battlefield-hardline-game-1080P-wallpaper-middle-size.jpg",
    popular_items: "325",
    id: 109,
    games: [
      {
        name: "Dead Space (2008)",
        added: "8,588",
        id: 4570,
      },
      {
        name: "Brutal Legend",
        added: "7,605",
        id: 5525,
      },
      {
        name: "Battlefield 1",
        added: "6,905",
        id: 998,
      },
    ],
  },
  {
    platform: "Sony Interactive Entertainment",
    image:
      "https://images.hdqwalls.com/download/bloodborne-ps4-game-1280x720.jpg",
    popular_items: "552",
    id: 6,
    games: [
      {
        name: "Bloodborne",
        added: "8,098",
        id: 3387,
      },
      {
        name: "Journey",
        added: "7,889",
        id: 2354,
      },
      {
        name: "Resident Evil 2 (1998)",
        added: "5,546",
        id: 5159,
      },
    ],
  },
  {
    platform: "Square Enix",
    image:
      "https://images.hdqwalls.com/download/1/nier-automata-4k-qu-1280x720.jpg",
    popular_items: "355",
    id: 413,
    games: [
      {
        name: "Deus Ex Human Revolution",
        added: "9,799",
        id: 4440,
      },
      {
        name: "NieR: Automata",
        added: "8,166",
        id: 10141,
      },
      {
        name: "Just Cause 3",
        added: "8,166",
        id: 3017,
      },
    ],
  },
];

export default Developer;
