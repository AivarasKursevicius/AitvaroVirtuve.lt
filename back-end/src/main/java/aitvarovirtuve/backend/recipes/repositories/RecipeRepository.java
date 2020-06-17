package aitvarovirtuve.backend.recipes.repositories;

import aitvarovirtuve.backend.recipes.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String>{

  Recipe findRecipeById(String id);

  List<Recipe> findByType(String type);

}
