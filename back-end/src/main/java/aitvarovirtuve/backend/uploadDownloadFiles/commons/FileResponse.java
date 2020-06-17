package aitvarovirtuve.backend.uploadDownloadFiles.commons;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FileResponse {
    private String name;
    private String uri;
    private String type;
    private long size;

}