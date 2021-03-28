import React from "react";
import "./App.css";

const App = () => {
  return (
    <div style={{ background: "black" }} className="cont">
      <div className="cont-left-side">
        <span className="hola-text">Hola! 👋🏻</span>
        <span className="introduction-text">
          I am Deepak Suthar & I am a Frontend Developer. 🚀
        </span>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/goodsoulapp.appspot.com/o/Deepak-cv.pdf?alt=media&token=6e20cc28-b1b1-4f45-9f3c-768b7498ecc0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ alignSelf: "start", width: "100%" }}
        >
          <button className="download-resume-button">Download Resume 📄</button>
        </a>
      </div>
      <div className="cont-right-side">
        <img src={"/my_face_memoji.png"} className="right-image" />
      </div>
    </div>
  );
};

export default App;
