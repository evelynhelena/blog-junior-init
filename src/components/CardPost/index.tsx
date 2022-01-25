import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./styles.module.scss";
export function CardPost() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/images/html-css.jpg"
          alt="HTML e CSS"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div" className={styles.titlePost}>
            HTML e CSS
          </Typography>
          <Typography variant="body1" color="text.secondary" className={styles.descriptionPost}>
            Descubra as novidades do HTML5 e do CSS3
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            by: Evelyn Helena
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}