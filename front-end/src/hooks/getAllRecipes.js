import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const response = await axios.get("http://localhost:6039/recipes/all");
    setRecipes(response.data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return [recipes];
};
