import "./index.css";

export default function Experience() {
  return (
    <div className="container">
      <div id="resumeContainer">
        <p id="title">Experience</p>
        <div className="resume">
          <div className="experience">
            <p id="time">Sept 2023 - Apr 2024</p>
            <p>Nfactorial! Web-Developer Courses</p>
          </div>

          <div className="experience">
            <p id="time">Jan 2021 – March 2023</p>
            <p>RA, Environmental Science and Technology Group, NU, Astana </p>
          </div>

          <div className="experience">
            <p id="time">Sep 2017 – Aug 2018</p>
            <p>Engineer-virologist, Biotron Group LLP, Stepnogorsk </p>
          </div>

          <div className="experience">
            <p id="time">Apr 2017</p>
            <p>
              Research Intern, Institute of Organic Synthesis and Coal
              Chemistry, Karagandy{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
