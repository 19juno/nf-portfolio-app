import "./index.css";
import Image from "../../assets/it-girl.svg";
import { motion } from "framer-motion";
import { Grid, Hidden } from "@mui/material";

export default function AboutMe() {
  return (
    <Grid container columnSpacing={2}>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="container"
      >
        <Grid item>
          <Hidden only="xs">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img className="image" src={Image}></img>
            </motion.div>
          </Hidden>
        </Grid>
        <Grid item style={{ marginTop: 0 }}>
          <p id="title">About me</p>
          <p id="text">
            My name is Kanafina Dinara. I'm a web developer. My goal is to
            create effective and visually attractive solutions that leave
            impression and achieve your goals.
          </p>
        </Grid>
      </motion.div>
    </Grid>
  );
}
