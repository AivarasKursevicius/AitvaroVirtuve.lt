import React from "react";
import faker from "faker";

const RecipeIntro = () => {
  return (
    <React.Fragment>
      <h2>Pavadinimas patiekalo</h2>
      <img
        className="fakeimg text"
        src={faker.image.city()}
        alt="a"
        style={{ height: "200px" }}
      />
      <p>
        APRAŠYMAS PATIEKALO oooooosad asdsada asdsa das a sadsadasd oooooosad
        asdsada asdsa das a sadsadasdoooooosad asdsada asdsa das a sadsadasd
        oooooosad asdsada asdsa das a sadsadasd oooooosad asdsada asdsa das a
        sadsadasd oooooosad asdsada asdsa das a sadsadasdoooooosad asdsada asdsa
        das a sadsadasd
      </p>
    </React.Fragment>
  );
};

export default RecipeIntro;
