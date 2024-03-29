import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";

const AnimationBtn = ({ to, children, whileHover, whileTap }) => {
  return (
    <div>
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
    </div>
  );
};

const pages = [
  {
    name: "HOME",
    path: "/home",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "EXPERIENCE",
    path: "/experience",
  },
  {
    name: "PROJECTS",
    path: "/projects",
  },
  {
    name: "CONTACTS",
    path: "/contacts",
  },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Grid containercolumnspacing={{ xs: 1, sm: 1, md: 1 }}>
        {pages.map((el, index) => (
          <Grid key={index} item className="name">
            <AnimationBtn
              to={el.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {el.name}
            </AnimationBtn>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <div className="header">
      <IconButton
        aria-label="menu"
        className="menu_button"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
