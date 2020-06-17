package aitvarovirtuve.backend.recipes.model;

import aitvarovirtuve.backend.uploadDownloadFiles.commons.FileResponse;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.File;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "recipes")
public class Recipe {

  @Id private String id;
  private String name;
  private String description;
  private List<Ingredient> ingredients;
  private String difficulty;
  private Integer time;
  private List images;
  private List type;
  private String authorName;
  private String authorEmail;


}
