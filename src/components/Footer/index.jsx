import "./index.css";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const contacts = [
  {
    contact: "Telegram",
    icon: <TelegramIcon />,
  },
  {
    contact: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    contact: "Github",
    icon: <GitHubIcon />,
  },
];

export default function Footer() {
  return (
    <div id="footer">
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <Grid container spacing={1}>
          {contacts.map((el, index) => (
            <Grid item xs={12} sm={8} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{el.icon}</ListItemIcon>
                    <ListItemText primary={el.contact} />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
