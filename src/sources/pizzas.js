import chikenRanch from "../assets/Pizza/chicken_ranch.jpg";
import chikenBBQ from "../assets/Pizza/chicken_barbekyu.jpg";

import superPapa from "../assets/Pizza/super-papa.jpg";
import allTheMeat from "../assets/Pizza/all-the-meat.jpg";

import spicyGardenSpecial from "../assets/Pizza/spicy-garden.png";
import greek from "../assets/Pizza/greek.jpg";

import americanHot from "../assets/Pizza/all-the-meat.jpg";
import spicyChickenRanch from "../assets/Pizza/spicy-chicken-ranch.png";

export const pizzas = [
  {
    id: "001",
    type: "chicken",
    name: "Chicken Ranch",
    ingredients: "Grilled Chicken, Tomatoes, Ranch Sauce, Mozzarella",
    image: chikenRanch,
    price: 10,
  },
  {
    id: "002",
    type: "chicken",
    name: "Chicken BBQ",
    ingredients: "Grilled Сhicken, Fresh Mushrooms, BBQ Sauce, Mozzarella",
    image: chikenBBQ,
    price: 11,
  },
  {
    id: "003",
    type: "meat",
    name: "Super Papa's",
    ingredients:
      "Pepperoni, Italian Sausage, Ham, Fresh Mushrooms, Green Peppers, Black Olives, Mozzarella",
    image: superPapa,
    price: 12,
  },
  {
    id: "004",
    type: "meat",
    name: "All The Meats",
    ingredients: "Pepperoni, Italian Sausage, Beef, Ham, Mozzarella",
    image: allTheMeat,
    price: 13,
  },
  {
    id: "005",
    type: "vegetarian",
    name: "Spicy Garden Special",
    ingredients:
      "Jalapeno peppers, Tomatoes, Fresh Mushrooms, Black Olives, Green Peppers, Mozzarella",
    image: spicyGardenSpecial,
    price: 14,
  },
  {
    id: "006",
    type: "vegetarian",
    name: "Greek",
    ingredients:
      "Tomatoes, Olives, Feta Cheese, Oregano, Hot Peppers, Mozzarella",
    image: greek,
    price: 11,
  },
  {
    id: "007",
    type: "hot",
    name: "American Hot",
    ingredients: "Tomato Sauce, Mozzarella, Pepperoni and Jalapeno peppers",
    image: americanHot,
    price: 12,
  },
  {
    id: "008",
    type: "hot",
    name: "Spicy Chicken Ranch",
    ingredients:
      "Ranch Sauce, Grilled Chicken, Mushrooms, Garlic, Jalapeno Peppers, Tomatoes, and Mozzarella",
    image: spicyChickenRanch,
    price: 13,
  },
];
