import { Box, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Order } from '../types/common';
import  OrderAPI  from '../api/order';
import GridviewControl from './UserOrdersView';

export default function Gridview()  {
  
    const [orders, setOrders] = React.useState<Array<Order>>([]);

    
      const getOrders = async () => {
        await OrderAPI.getOrders().then(response => {
          setOrders(response.data);
          console.log(response.data);
        });
      }
      getOrders();

  return (
    <div >
    <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <GridviewControl orders ={orders} />
    </Box>
    </Container>
    </div>
  )
};

