import { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import Gif from "../../assets/Blog_post.gif";
import ModalInput from "./ModalInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Contacts() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container_contacts"
    >
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <p id="title">Get in touch</p>
          <motion.button
            className="button"
            whileHover={{
              scale: 1.2,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={handleOpen}
          >
            Contact me
          </motion.button>
          {open && (
            <ModalInput
              open={open}
              style={style}
              handleClose={handleClose}
            ></ModalInput>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img src={Gif} alt="gif" className="image_contacts" />
        </Grid>
      </Grid>
    </motion.div>
  );
}
