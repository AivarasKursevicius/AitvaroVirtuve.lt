import axios from "axios";

class Service {
  upload(acceptedFiles) {
    // console.log(acceptedFiles);
    const formData = new FormData();

    for (const file of acceptedFiles) {
      formData.append("files[]", file, file.name);
    }

    return axios.post("http://localhost:6039/upload-multiple-files", formData);
  }
}

export default new Service();
