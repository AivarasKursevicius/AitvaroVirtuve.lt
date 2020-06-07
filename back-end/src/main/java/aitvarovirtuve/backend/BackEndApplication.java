package aitvarovirtuve.backend;

import aitvarovirtuve.backend.uploadDownloadFiles.storage.StorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class BackEndApplication {

  public static void main(String[] args) {
    SpringApplication.run(BackEndApplication.class, args);
  }
}
