import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Apple",
    category: "fruit",
    rating: 4.5,
    discount: 20,
    price: 100,
    image:
      "https://i.postimg.cc/JntSV1Hz/apple.png",
  },
  {
    _id: uuid(),
    title: "Onion",
    category: "allium",
    rating: 2.5,
    discount: 10,
    price: 150,
    image:
      "https://i.postimg.cc/Jng0m2sb/onion.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Garlic",
    category: "allium",
    rating: 4.0,
    discount: 30,
    price: 160,
    image:
      "https://i.postimg.cc/x1yXH5Z2/garlic.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Brocolli",
    category: "cruciferous",
    rating: 3.2,
    price: 110,
    discount: 20,
    image:
      "https://i.postimg.cc/J7D5fy0k/brocolli.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Cualiflower",
    category: "cruciferous",
    rating: 3.5,
    price: 140,
    discount: 30,
    image:
      "https://i.postimg.cc/cCn7wz2m/cualiflower.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Pinapple",
    category: "fruit",
    rating: 3.5,
    discount: 30,
    price: 190,
    image:
      "https://i.postimg.cc/gcX1g2PM/pinapple.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Mint",
    category: "leafy",
    rating: 4.1,
    discount: 10,
    price: 100,
    image:
      "https://i.postimg.cc/xCbg3qbM/mint.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Spinach",
    category: "leafy",
    rating: 2.1,
    discount: 10,
    price: 190,
    image:
      "https://i.postimg.cc/T1M07GrS/spinach.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Pumpkin",
    category: "marrow",
    rating: 4.3,
    discount: 20,
    price: 110,
    image:
      "https://i.postimg.cc/XNQxKKT9/pumpkin.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Cucumber",
    category: "marrow",
    rating: 4.8,
    discount: 10,
    price: 170,
    image:
      "https://i.postimg.cc/MHPDWxy9/cucumber.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Beetroot",
    category: "root",
    rating: 1.5,
    discount: 30,
    price: 120,
    image:
      "https://i.postimg.cc/htxjnsnm/beetroot.png",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Strawberry",
    category: "fruit",
    rating: 4.2,
    discount: 20,
    price: 190,
    image:
      "https://i.postimg.cc/15D2Z7Xw/stawberry.png",
    quantity: 0,
  },
];
