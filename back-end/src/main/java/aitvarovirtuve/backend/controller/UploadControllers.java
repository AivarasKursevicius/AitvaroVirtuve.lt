package aitvarovirtuve.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


@RestController
public class UploadControllers {

//  @RequestMapping(
//      value = "/upload",
//      method = RequestMethod.POST,
//      consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//  public ResponseEntity<Object> uploadFile(@RequestParam("file") MultipartFile file)
//      throws IOException {
//    File convertedFile = new File("C:\\Programming\\" + file.getOriginalFilename());
//    convertedFile.createNewFile();
//    FileOutputStream fout = new FileOutputStream(convertedFile);
//    fout.write(file.getBytes());
//    fout.close();
//    return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);
//  }
//




}
