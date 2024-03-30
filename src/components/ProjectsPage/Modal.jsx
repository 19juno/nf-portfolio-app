import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import { Dialog } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Modal({ open, onClose, el }) {
  return (
    <div>
      <Dialog open={open}>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="project" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button size="small" color="primary" onClick={onClose}>
                Close
              </Button>
              <Button
                size="small"
                color="primary"
                variant="contained"
                endIcon={<GitHubIcon />}
                onClick={onClose}
              >
                Github
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
}
