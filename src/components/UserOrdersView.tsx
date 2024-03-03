import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';
import { Item, Order ,User } from '../types/common';
import { orderNormalizer } from '../utils/common';
import  OrderAPI  from '../api/order';
import  UserAPI  from '../api/user';
import user from '../api/user';


type Props = {
    orders: Array<Order>;
  }

export default function GridviewControl ({ orders }: Props)  {
  
  
    const [orderItems, setOrderItems] = React.useState<Array<Item>>([]);
    const [order, setOrder] = React.useState<Order | null>(null);
    const [User, Setuser] = React.useState<User | null>(null);

    const onRowsSelectionHandler = (ids: any[]) => {
        const selectedRowsData = ids.map((id: any) => orders.find((row: { id: any; }) => row.id === id));
        console.log(selectedRowsData[0]);
        setOrder(orderNormalizer(selectedRowsData[0]));
        
      };

    React.useEffect(() => {
        if (order) {
          getOrderItems(order.id);
          getUser(order.user_id);  
          
        }
      }, [order]);
      
  
      const getOrderItems = async (orderId: number) => {
        await OrderAPI.getOrderItems(orderId).then(response => {
          setOrderItems(response.data);
        });
      }

      const getUser = async (userId: number) => {
        await UserAPI.GetUser(userId).then(response => {
          Setuser(response.data[0]);
        });
      }
      
     console.log(orderItems);



    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'create_date', headerName: 'Create date', width: 250 },
        { field: 'registration_date', headerName: 'Registration date', width: 250 },
        { field: 'price', headerName: 'Price', width: 250 },
      ];
      const OrderItemscolumns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'discription', headerName: 'Discription', width: 250 },
        { field: 'price', headerName: 'Price', width: 250 },
      ];
      
    

  return (
    <div style={{ height: '100%', width: '100%' }}>
        <Typography component="h1" variant="h5">
            Orders
          </Typography>
      <DataGrid
        columns={columns}
        rows={orders}
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
      />
        <Typography component="h1" variant="h5">
           Customer 
          </Typography>
      <Card  sx={{ maxWidth: 370 }}  >
            
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {User?.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {User?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {User?.address}
        </Typography>
      </CardContent>
          </Card>
        <Typography component="h1" variant="h5">
            orders items
          </Typography>
      <DataGrid
        columns={OrderItemscolumns}
        rows={orderItems}
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
      />
       
    </div>
  );
};

