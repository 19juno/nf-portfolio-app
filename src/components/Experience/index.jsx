import "./index.css";
import { motion } from "framer-motion";
import { Grid, ListItem, Typography } from "@mui/material";
import Image2 from "../../assets/image.svg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import JS from "../../assets/js.png";
import CSS from "../../assets/css.svg";
import HTML from "../../assets/html.png";
import NodeJS from "../../assets/nodejs.svg";
import REACTicon from "../../assets/react.svg";
import REDUXicon from "../../assets/redux.svg";

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
const stackslist = [
  { stack: "HTML", image: HTML },
  { stack: "CSS", image: CSS },
  { stack: "Javascript", image: JS },
  { stack: "React", image: REACTicon },
  { stack: "Node JS", image: NodeJS },
  { stack: "React Redux", image: REDUXicon },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Experience() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container3"
    >
      <Grid container direction="column">
        <p id="title">Experience</p>

        <Grid container direction="column">
          <Grid container direction="row" sx={{ width: "400px" }}>
            {stackslist.map((el, index) => (
              <Grid item xs={12} sm={12} md={12}>
                <img className="icon" src={el.image}></img>
                <Typography variant="h5" gutterBottom>
                  {el.stack}
                </Typography>
                <BorderLinearProgress variant="determinate" value={50} />
              </Grid>
            ))}
          </Grid>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img className="image" src={Image2}></img>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
