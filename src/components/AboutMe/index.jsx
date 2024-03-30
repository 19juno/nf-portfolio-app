import "./index.css";
import Image from "../../assets/it-girl.svg";
import { motion } from "framer-motion";
import { Grid, Box } from "@mui/material";

export default function AboutMe() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "../../../public/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <Grid item xs={12} sm={12} md={8} xl={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p id="title">About me</p>
            <p id="text_about">
              My name is Kanafina Dinara. I'm a web developer. I focused on the
              developing user friendly and responsible web application for
              users.
            </p>

            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="button"
              onClick={handleClick}
            >
              Check out my CV
            </motion.button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img className="image1" src={Image}></img>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
