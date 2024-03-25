import "./index.css";
import Image from "../../assets/image.jpg";
import { motion } from "framer-motion";
import { Grid, Hidden } from "@mui/material";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container"
    >
      {/* <div className="description"> */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <p id="title">About me</p>
          <p id="text">
            My name is Kanafina Dinara. I'm a web developer. My goal is to
            create effective and visually attractive solutions that leave
            impression and achieve your goals.
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Hidden only="xs">
            <img className="image" src={Image}></img>
          </Hidden>
        </Grid>
      </Grid>
      {/* </div> */}

      {/* <div className="description">
        <p id="title">About me</p>
        <p id="text">
          My name is Kanafina Dinara. I'm a web developer. My goal is to create
          effective and visually attractive solutions that leave impression and
          achieve your goals.
        </p>
      </div>
      <div>
        <img className="image" src={Image}></img>
      </div> */}
    </motion.div>
  );
}
