interface Publishers {
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

const Publishers: Publishers[] = [
  {
    platform: "Electronic Arts",
    image: "https://wallpapercave.com/wp/2LYC0WB.jpg",
    popular_items: "1,308",
    id: 354,
    games: [
      {
        name: "Portal 2",
        added: "14,632",
        id: 4200,
      },
      {
        name: "Left 4 Dead 2",
        added: "14,727",
        id: 12020,
      },
      {
        name: "Apex Legends",
        added: "9,908",
        id: 290856,
      },
    ],
  },
  {
    platform: "Square Enix",
    image: "https://cdn.wallpapersafari.com/74/27/r7VteI.jpg",
    popular_items: "579",
    id: 308,
    games: [
      {
        name: "Tomb Raider (2013)",
        added: "9.308",
        id: 5286,
      },
      {
        name: "Life Is Strange",
        added: "13,989",
        id: 3439,
      },
      {
        name: "Rise Of Tomb Raider",
        added: "10,812",
        id: 7689,
      },
    ],
  },
  {
    platform: "Ubisoft Entertainment",
    image:
      "https://3.bp.blogspot.com/-mFCYInEaetM/UOXpy8xIVaI/AAAAAAAAUTs/tB3Verwf0gk/s1600/Far_Cry_3_Wallpaper.jpg",
    popular_items: "2,209",
    id: 918,
    games: [
      {
        name: "Far Cry 3",
        added: "9.311",
        id: 4161,
      },
      {
        name: "For Honor",
        added: "8,633",
        id: 5286,
      },
      {
        name: "Assassin's Creed IV: Black Flag",
        added: "8,551",
        id: 3841,
      },
    ],
  },
  {
    platform: "Microsoft Studios",
    image: "https://cdn.wccftech.com/wp-content/uploads/2016/03/Alan-Wake.jpg",
    popular_items: "493",
    id: 20987,
    games: [
      {
        name: "Alan Wake",
        added: "9.176",
        id: 19487,
      },
      {
        name: "Rise Of Tomb Raider",
        added: "10,812",
        id: 7689,
      },
      {
        name: "Limbo",
        added: "12,490",
        id: 1030,
      },
    ],
  },
];

export default Publishers;
