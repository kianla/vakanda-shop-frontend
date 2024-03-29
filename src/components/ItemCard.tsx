import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Item } from '../types/common';

type Props = {
  item: Item;
  onAction: (id: number) => void;
}

function ItemCard ({ item, onAction }: Props)  {

  const handleItemClick = () => {
    onAction(item.id);
  }

  return (
    <Grid  container spacing={2} direction="row" alignItems="flex-start" >
    <Card sx={{ width: 200 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={item.photo}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.discription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {item.item_count}
        </Typography>
        <Button fullWidth variant='contained' onClick={handleItemClick}>
          Add Order
        </Button>
      </CardContent>
    </Card>
   </Grid>
  );
};

export default ItemCard;
