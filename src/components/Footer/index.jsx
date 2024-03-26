import "./index.css";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div id="footer">
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <Grid container direction="row" spacing={1}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Grid item xs={6} sm={4} md={2}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TelegramIcon />
                  </ListItemIcon>
                  <ListItemText primary="Telegram" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Grid item xs={6} sm={4} md={2}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Grid item xs={6} sm={4} md={2}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="Github" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Grid item xs={6} sm={4} md={2}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <WhatsAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="WhatsApp" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Grid item xs={6} sm={4} md={2}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gmail" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </motion.div>
        </Grid>
      </Box>
    </div>
  );
}
