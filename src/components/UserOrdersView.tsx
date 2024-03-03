import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';
import { Item, Order } from '../types/common';
import { orderNormalizer } from '../utils/common';
import  OrderAPI  from '../api/order';


type Props = {
    orders: Array<Order>;
  }

export default function GridviewControl ({ orders }: Props)  {
  
  
    const [orderItems, setOrderItems] = React.useState<Array<Item>>([]);
    const [order, setOrder] = React.useState<Order | null>(null);
    const onRowsSelectionHandler = (ids: any[]) => {
        const selectedRowsData = ids.map((id: any) => orders.find((row: { id: any; }) => row.id === id));
        console.log(selectedRowsData[0]);
        setOrder(orderNormalizer(selectedRowsData[0]));
      };

    React.useEffect(() => {
        if (order) {
          
          getOrderItems(order.id);
          
        }
      }, [order]);
  
      const getOrderItems = async (orderId: number) => {
        await OrderAPI.getOrderItems(orderId).then(response => {
          setOrderItems(response.data);
        
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
      <DataGrid
        columns={columns}
        rows={orders}
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
      />
      <DataGrid
        columns={OrderItemscolumns}
        rows={orderItems}
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
      />
       
    </div>
  );
};

