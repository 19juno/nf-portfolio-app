import * as React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const AnimationBtn = ({ to, children, whileHover, whileTap }) => {
  return (
    <Link to={to}>
      <motion.button
        whileHover={whileHover}
        whileTap={whileTap}
        variant="text"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        {children}
      </motion.button>
    </Link>
  );
};

export default function Header() {
  return (
    <div className="header">
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4} md={2}>
          <AnimationBtn
            to="/about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </AnimationBtn>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <AnimationBtn
            to="/experience"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Experience
          </AnimationBtn>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <AnimationBtn
            to="/projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </AnimationBtn>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <AnimationBtn
            to="/contacts"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contacts
          </AnimationBtn>
        </Grid>
      </Grid>

      {/* <Stack spacing={2}direction="row">
          <AnimationBtn
            to="/about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </AnimationBtn>
          <AnimationBtn
            to="/experience"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Experience
          </AnimationBtn>
          <AnimationBtn
            to="/projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </AnimationBtn>
          <AnimationBtn
            to="/contacts"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contacts
          </AnimationBtn> */}

      {/* <Link to="/about">
            <Button variant="text">About</Button>
          </Link>
          <Link to="/experience">
            <Button variant="text">Experience</Button>
          </Link>

          <Link to="/projects">
            <Button variant="text">Projects</Button>
          </Link>
          <Link to="/contacts">
            <Button variant="text">Contacts</Button>
          </Link> */}
      {/* </Stack> */}
    </div>
  );
}
