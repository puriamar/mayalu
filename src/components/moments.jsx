import React, { useState } from "react";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";

function Moments() {
  const images = [one, two, three, four, five, six, seven];
  const [currImage, setcurrImage] = useState(0);
  const nextImage = () => {
    if (currImage === images.length - 1) {
      return;
    }
    setcurrImage(currImage + 1);
  };

  const prevImage = () => {
    if (currImage === 0) {
      return;
    }
    setcurrImage(currImage - 1);
  };

  return (
    <>
      <h1>&#10084; &#10084; Some of our loving memories. &#10084; &#10084;</h1>
      <img src={images[currImage]} width={400} />
      <br />
      <button
        style={{
          margin: "5px",
        }}
        onClick={prevImage}
      >
        Prev
      </button>
      <button
        style={{
          margin: "5px",
        }}
        onClick={nextImage}
      >
        Next
      </button>
    </>
  );
}

export default Moments;
