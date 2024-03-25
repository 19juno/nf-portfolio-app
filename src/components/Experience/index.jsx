import "./index.css";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const work = [
  {
    date: "Jan 2021 – Mar 2023",
    work: "Environmental Science and Technology Group, NU, Astana",
    position: "Research Assistant",
  },
  {
    date: "Sep 2017 – Aug 2018",
    work: "Biotron Group LLP, Stepnogorsk",
    position: "Engineer-virologist",
  },
];
const education = [
  {
    date: "Sep 2023 - Apr 2024",
    school: "Nfactorial! Web-intro Course",
    degree: "Web-developer",
  },
  {
    date: "Sep 2015 - June 2017",
    school: "Karagandy State University, Kazakhstan ",
    degree: "Master of Science in Chemistry",
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container2"
    >
      <div id="resumeContainer">
        <p id="title">Experience</p>

        <Grid
          container
          rowSpacing={{ xs: 4, sm: 2, md: 1 }}
          spacing={{ xs: 2, md: 3 }}
        >
          {work.map((item, index) => (
            <div className="">
              <Grid item xs={4} sm={6} md={12} key={index}>
                <p>{item.date}</p>
                <p>{item.school}</p>
                <p>{item.degree}</p>
              </Grid>
              <Grid item xs={4} sm={6} md={12} key={index}>
                <p>{item.date}</p>
                <p>{item.school}</p>
                <p>{item.degree}</p>
              </Grid>
            </div>
          ))}
          {education.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <p>{item.date}</p>
              <p>{item.work}</p>
              <p>{item.position}</p>
            </Grid>
          ))}
        </Grid>
      </div>
    </motion.div>
  );
}
