import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function LearnCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?fit=bounds&format=jpg&width=960"
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to="/learn/learndetail">
            Machine Learning
            </Link>
          </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore minus reiciendis veritatis inventore deserunt quod, provident ut? Est odio architecto labore ipsam quos fugit fugiat doloremque tenetur omnis iusto!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">May 5</Button>
        <Button size="small">in Career</Button>
      </CardActions>
    </Card>
  );
}
