interface Publishers {
  platform: string;
  image: string;
  popular_items: string;
  id: number;
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
    image: "https://wallpapercave.com/wp/2LYC0WB.jpg",
    popular_items: "1,308",
    id: 354,
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
    image: "https://cdn.wallpapersafari.com/74/27/r7VteI.jpg",
    popular_items: "579",
    id: 308,
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
      "https://3.bp.blogspot.com/-mFCYInEaetM/UOXpy8xIVaI/AAAAAAAAUTs/tB3Verwf0gk/s1600/Far_Cry_3_Wallpaper.jpg",
    popular_items: "2,209",
    id: 918,
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
    image: "https://cdn.wccftech.com/wp-content/uploads/2016/03/Alan-Wake.jpg",
    popular_items: "493",
    id: 20987,
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

export default Publishers;
