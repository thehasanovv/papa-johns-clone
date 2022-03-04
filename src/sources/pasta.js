import chickenPasta from "../assets/pasta/pasta_chicken_ranch.jpg";
import mamasPasta from "../assets/pasta/pasta_mamas_pasta.jpg";
import superPapaPasta from "../assets/pasta/pasta_super_papa.jpg";

export const pastas = [
  {
    id: "pas1",
    name: "Super Papa's Pasta",
    ingredients:
      "Spaghetti, Pepperoni, Ham, Italian Sausage, Green Peppers, Fresh Mushrooms, Mozzarella, Pizza Sauce",
    image: chickenPasta,
    price: 8,
  },
  {
    id: "pas2",
    name: "Chicken Ranch Pasta",
    ingredients:
      "Spaghetti, Grilled Chicken, Fresh Mushrooms, Ranch Sauce, Mozzarella",
    image: mamasPasta,
    price: 7,
  },
  {
    id: "pas3",
    name: "Mama's Pasta",
    ingredients: "Spaghetti, Parmesan, Oregano, Pizza Sauce, Mozzarella",
    image: superPapaPasta,
    price: 6,
  },
];
