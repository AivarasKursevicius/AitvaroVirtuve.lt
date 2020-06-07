package aitvarovirtuve.backend.recipes.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "recipes")
public class Recipe {

  @Id private String id;
  private String name;
  private String description;
  private List ingredient;
  private String difficulty;
  private String time;
  private List images;
  private List type;
  private String authorName;
  private String authorEmail;

  public Recipe(
      String id,
      String name,
      String description,
      List ingredient,
      String difficulty,
      String time,
      List images,
      List type,
      String authorName,
      String authorEmail) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ingredient = ingredient;
    this.difficulty = difficulty;
    this.time = time;
    this.images = images;
    this.type = type;
    this.authorName = authorName;
    this.authorEmail = authorEmail;
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public List getIngredient() {
    return ingredient;
  }

  public String getDifficulty() {
    return difficulty;
  }

  public String getTime() {
    return time;
  }

  public List getImages(){return images;}

  public List getType() {
    return type;
  }

  public String getAuthorName() {
    return authorName;
  }

  public String getAuthorEmail() {
    return authorEmail;
  }
}