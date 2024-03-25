import "./index.css";
import Image from "../../assets/image.jpg";

export default function AboutMe() {
  return (
    <div className="container">
      <div className="description">
        <p id="title">About me</p>
        <p id="text">
          My name is Kanafina Dinara. I'm a web developer. My goal is to create
          effective and visually attractive solutions that leave impression and
          achieve your goals.
        </p>
      </div>
      <div>
        <img className="image" src={Image}></img>
      </div>
    </div>
  );
}
