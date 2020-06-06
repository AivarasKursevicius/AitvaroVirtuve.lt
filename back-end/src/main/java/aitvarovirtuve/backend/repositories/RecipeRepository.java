package aitvarovirtuve.backend.repositories;

import aitvarovirtuve.backend.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {

  Recipe findRecipeById(String id);
}
