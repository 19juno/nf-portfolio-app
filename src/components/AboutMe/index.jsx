import "./index.css";
import Image from "../../assets/it-girl.svg";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container2"
    >
      <Grid
        container
        direction="row"
        sx={{ justifyContent: "center" }}
        spacing={1}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p id="title">About me</p>
          <p id="text_about">
            My name is Kanafina Dinara. I'm a web developer. My goal is to
            create effective and visually attractive solutions that leave
            impression and achieve your goals.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img className="image" src={Image}></img>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
