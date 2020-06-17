// import React, { useCallback } from "react";
// import Dropzone, { useDropzone } from "react-dropzone";
// import axios from "axios";
// import Service from "./Service";

// class Drop extends React.Component {
//   onFileChangeHandler = (e) => {
//     const formData = new FormData();
//     for (let i = 0; i < e.target.files.length; i++) {
//       formData.append("files", e.target.files[i]);
//     }
//     Service.upload(formData).then((res) => {
//       console.log(res.data);
//       alert("File uploaded successfully.");
//     });
//   };

//   render() {
//     return (
//       <input
//         type="file"
//         className="form-control"
//         name="files"
//         multiple
//         onChange={this.onFileChangeHandler}
//       />
//     );
//   }
// }

// export default Drop;
