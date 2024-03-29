import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { Dialog } from "@mui/material";

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
            <Button size="small" color="primary" onClick={onClose}>
              Exit
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
}
