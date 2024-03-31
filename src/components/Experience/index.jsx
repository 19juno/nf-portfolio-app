import "./index.css";
import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";
import Image2 from "../../assets/it-girl2.svg";
import { styled } from "@mui/material/styles";
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

const data = [
  {
    stack: "HTML",
    color: "#f44336",
    percentage: "80",
  },
  {
    stack: "CSS",
    color: "#0277bd",
    percentage: "70",
  },
  {
    stack: "JavaScript",
    color: "#ffea00",
    percentage: "60",
  },
  {
    stack: "React",
    color: "#29b6f6",
    percentage: "80",
  },
  {
    stack: "Node JS",
    color: "#7cb342",
    percentage: "50",
  },
  {
    stack: "React Redux",
    color: "#5e35b1",
    percentage: "40",
  },
];

const BorderLinearProgress = styled(LinearProgress)(({ colorstack }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#fafafa", // theme.palette.grey, // [theme.palette.mode === "light" ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: colorstack, ///theme.palette.mode === "light" ? "#d50000" : "#308fe8",
  },
}));

export default function Experience() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container_experience"
    >
      <p id="title">My Stack</p>

      <Grid container direction="row" spacing={0}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <Grid container direction="row" columnSpacing={3}>
            <Grid item>
              <Grid
                container
                direction="column"
                rowSpacing={2}
                sx={{ paddingTop: "20px" }}
              >
                {[HTML, CSS, JS, REACTicon, NodeJS, REDUXicon].map(
                  (el, index) => (
                    <Grid item key={index}>
                      <img className="icon" src={el}></img>
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>

            <Grid item>
              {data.map((el, index) => (
                <Grid
                  container
                  key={index}
                  spacing={0}
                  direction="column"
                  rowSpacing={0}
                >
                  <Grid item md={4} sx={{ paddingTop: "20px" }}>
                    <Typography
                      variant="h7"
                      gutterBottom
                      sx={{
                        display: "flex",
                        alignSelf: "center",
                      }}
                    >
                      {el.stack}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={8}
                    sx={{ display: "flex", alignSelf: "center" }}
                  >
                    <BorderLinearProgress
                      variant="determinate"
                      value={el.percentage}
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "300px",
                          md: "400px",
                          lg: "500px",
                          xl: "600px",
                        },
                      }}
                      colorstack={el.color}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6} xl={6}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            sx={{ margin: 0 }}
          >
            <img className="image_experience" src={Image2} />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
