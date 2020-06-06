package aitvarovirtuve.backend.controller;

import aitvarovirtuve.backend.model.Recipe;
import aitvarovirtuve.backend.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

  @Autowired public RecipeRepository recipeRepository;

  @GetMapping(value = "/recipes/all")
  public List<Recipe> getAllStudents() {
    return recipeRepository.findAll();
  }

  @GetMapping(value = "/recipes/{id}")
  public Recipe getSingleRecipe(@PathVariable String id) {
    return recipeRepository.findRecipeById(id);
  }

  @PostMapping(value = "/recipes/create")
  public String createStudent(@RequestBody Recipe recipe) {
    recipeRepository.insert(recipe);
    return "Recipe " + recipe.getName() + " created";
  }

  @GetMapping(value = "/api/image/logo")
  public ResponseEntity<InputStreamResource> getImage() throws IOException {

    ClassPathResource imgFile = new ClassPathResource("C:/Programming/Logo.png");

    return ResponseEntity
            .ok()
            .contentType(MediaType.IMAGE_PNG)
            .body(new InputStreamResource(imgFile.getInputStream()));
  }
}
