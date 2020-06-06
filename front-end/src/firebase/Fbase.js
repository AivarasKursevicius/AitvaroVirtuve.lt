import React from "react";
/* eslint-disable */
import firebaseConfig from "./firebaseConfig";
/* eslint-enable */
import firebase from "firebase";

class Fbase extends React.Component {
  state = {
    title: "Logo",
    description: "description",
    id: "Logo",
    imgUrl: "",
  };

  componentDidMount() {
    firebase
      .storage()
      .ref(this.state.id)
      .child(`${this.state.id}.jpeg`)
      .getDownloadURL()
      .then((url) => this.setState({ imgUrl: url }));
  }

  render() {
    console.log(this.state.imgUrl);
    return (
      <>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        <img src={this.state.imgUrl} alt="img" />
      </>
    );
  }
}

export default Fbase;
