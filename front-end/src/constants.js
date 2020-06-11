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
  time: {
    title: "Gaminimo laikas",
    name: "time",
    options: [
      { key: 1, text: "Iki 15 minučių", value: 15 },
      { key: 2, text: "Iki 30 minučių", value: 30 },
      { key: 3, text: "Iki 45 minučių", value: 45 },
      { key: 4, text: "Iki 1 valanda", value: 60 },
      { key: 5, text: "Virš 1 valandos", value: 99 },
    ],
  },
  type: {
    title: "Patiekalo tipas",
    name: "type",
    options: [
      { key: 1, text: "Pica", value: "PIZZA" },
      { key: 2, text: "Daržovės", value: "VEG" },
      { key: 3, text: "Grill maistas", value: "GRILL" },
      { key: 4, text: "Vištiena", value: "CHICKEN" },
    ],
  },
  difficulty: {
    title: "Gaminimo sudetingumas",
    name: "difficulty",
    options: [
      { key: 1, text: "Labai lengvas", value: "VERY_EASY" },
      { key: 2, text: "Lengas", value: "EASY" },
      { key: 3, text: "Vidutinis", value: "MEDIUM" },
      { key: 4, text: "Sunkus", value: "HARD" },
      { key: 5, text: "Labai sunkus", value: "VERY_HARD" },
    ],
  },
  uploadImg: "Įkelti nuotrauka",
  authorName: "Autoriaus vardas",
  authorEmail: "Autoriaus el-paštas",
  uploadForm: "Įkelti nauja recepta",
};

export const TEXTAREA_ROWS = 6;

export default FOOD_TYPE;
