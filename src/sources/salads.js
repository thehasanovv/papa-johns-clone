import caesarSalad from "../assets/salads/caesar-salad.jpg";
import gardenSalad from "../assets/salads/garden-salad.jpg";
import greekSalad from "../assets/salads/greek-salad.jpg";
import tunaSalad from "../assets/salads/tuna-salad.jpg";

export const salads = [
  {
    id: "sa1",
    name: "Caesar Salad",
    ingredients:
      "Grilled Chicken, Iceberg Lettuce, Croutons, Tomatoes, Shaved Parmesan, Caesar Dressing",
    image: caesarSalad,
    price: 9,
  },
  {
    id: "sa2",
    name: "Greek Salad",
    ingredients:
      "Cucumbers, Tomatoes, Iceberg Lettuce, Black Olives, Feta Cheese, Italian Dressing",
    image: gardenSalad,
    price: 6,
  },
  {
    id: "sa3",
    name: "Garden Salad",
    ingredients:
      "Cucumbers, Tomatoes, Iceberg Lettuce, Black Olives, Feta Cheese, Italian Dressing",
    image: greekSalad,
    price: 5,
  },
  {
    id: "sa4",
    name: "Tuna Salad",
    ingredients:
      "Tuna, Iceberg Letucce, Black Olives, Corn, Cucumbers, Italian Dressing",
    image: tunaSalad,
    price: 8,
  },
];
