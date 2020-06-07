package aitvarovirtuve.backend.recipes.controller;

import aitvarovirtuve.backend.recipes.model.Recipe;
import aitvarovirtuve.backend.recipes.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecipeController {

  @Autowired public RecipeRepository recipeRepository;

  @GetMapping(value = "/recipes/all")
  public List<Recipe> getAllRecipes() {
    return recipeRepository.findAll();
  }

  @GetMapping(value = "/recipes/{id}")
  public Recipe getSingleRecipe(@PathVariable String id) {
    return recipeRepository.findRecipeById(id);
  }

  @PostMapping(value = "/recipes/create")
  public String createRecipe(@RequestBody Recipe recipe) {
    recipeRepository.insert(recipe);
    return "Recipe " + recipe.getName() + " created";
  }

  @GetMapping(value = "/recipes/type:{type}")
  public List<Recipe> getRecipesByType(@PathVariable String type) {
    return recipeRepository.findByType(type);
  }
}
