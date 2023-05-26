interface Genre {
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

const Genres: Genre[] = [
  {
    platform: "Action",
    image:
      "https://images.hdqwalls.com/download/battlefield-4-soldier-to-1280x720.jpg",
    popular_items: "172,591",
    id: 4,
    games: [
      {
        name: "Red Dead Redemption 2",
        player: "19,389",
        id: 28,
      },
      {
        name: "Cyberpunk 2077",
        player: "18,569",
        id: 41494,
      },
      {
        name: "Uncharted 3: Drake Deception",
        player: "15,292",
        id: 5703,
      },
    ],
  },
  {
    platform: "Indie",
    image: "https://wallpaperaccess.com/full/2743248.jpg",
    popular_items: "52,725",
    id: 51,
    games: [
      {
        name: "Ori and The Will of The Wisps",
        player: "12,489",
        id: 28199,
      },
      {
        name: "Sky: Children Of The Light",
        player: "11,413",
        id: 244698,
      },
      {
        name: "Limbo",
        player: "11,263",
        id: 1030,
      },
    ],
  },
  {
    platform: "Adventure",
    image:
      "https://images.hdqwalls.com/download/cyberpunk-2077-girl-art-25-1280x720.jpg",
    popular_items: "132,331",
    id: 3,
    games: [
      {
        name: "The Legend Of Zelda: Breath Of the Wild",
        player: "19,389",
        id: 22511,
      },
      {
        name: "Horizon Zero Dawn",
        player: "18,569",
        id: 278,
      },
      {
        name: "Tomb Raider (2013)",
        player: "9,308",
        id: 5286,
      },
    ],
  },
  {
    platform: "Strategy",
    image: "https://wallpapercave.com/wp/wp3001674.jpg",
    popular_items: "52,125",
    id: 10,
    games: [
      {
        name: "Sid Meier's CivilizationV",
        player: "8,636",
        id: 13633,
      },
      {
        name: "Company Of Heroes 2",
        player: "8,557",
        id: 10243,
      },
      {
        name: "XCOM: Enemy Unknown",
        player: "7,681",
        id: 13910,
      },
    ],
  },
];

export default Genres;
