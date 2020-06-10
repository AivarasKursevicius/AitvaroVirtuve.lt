export const PNG = ".PNG";

export const FOOD_ICON_PATH = "/images/icons/";

const FOOD_TYPE = [
  { id: 1, name: "Sumuštiniai", icon: "sandwitch", type: "SANDWITCH" },
  { id: 2, name: "Vegetarams", icon: "veg", type: "VEG" },
  { id: 3, name: "Grillio mėgėjams", icon: "grill", type: "GRILL" },
  { id: 4, name: "Desertai", icon: "desert", type: "DESERT" },
  { id: 5, name: "Picos", icon: "pizza", type: "PIZZA" },
  { id: 6, name: "Gėrimai", icon: "drink", type: "DRINK" },
  { id: 7, name: "Pyragai", icon: "cake", type: "CAKE" },
  { id: 8, name: "Greitas maistas", icon: "fast", type: "FAST" },
  { id: 9, name: "Vištienos mėgėjams", icon: "chicken", type: "CHICKEN" },
  { id: 10, name: "Kam patinka aštriai", icon: "chili", type: "CHILI" },
];

export const RECIPE_DETAILS = {
  name: "Recepto pavadinimas",
  description: "Recepto aprašymas",
  ingredients: "Ingredientai",
  time: "Gaminimo laikas",
  type: "Patiekalo tipas",
  difficulty: "Gaminimo sudetingumas",
  uploadImg: "Įkelti nuotrauka",
  authorName: "Autoriaus vardas",
  authorEmail: "Autoriaus el-paštas",
  uploadForm: "Įkelti nauja recepta",
};

export const TEXTAREA_ROWS = 6;

export default FOOD_TYPE;
