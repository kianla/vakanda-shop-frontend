import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Item } from '../types/common';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  orderItems: Array<Item>;
  onOrderItemDelete: (id: number) => void;
}

export default function Review({ orderItems, onOrderItemDelete }: Props) {
  
  const calcTotalPrice = () => {
    let sum = 0;
    orderItems.map(item => sum += item.price);
    return sum;
  }
  const handleClose = () => {
    window.location.reload();
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orderItems.map((item) => (
          <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} secondary={item.discription} />
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Typography variant="body2">{item.price}</Typography>
              <Button variant='contained' onClick={() => onOrderItemDelete(item.id)}>Delete</Button>
            </Stack>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {calcTotalPrice().toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>

    </React.Fragment>
  );
}
