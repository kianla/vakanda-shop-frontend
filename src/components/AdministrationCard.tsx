import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AdministrationCardList ()  {
  const navigate = useNavigate();
  const redirectToChangePassword = () => {
    navigate('/ChangePassword'); 
  };
  const redirectToChangeAddress = () => {
    navigate('/ChangeAddress'); 
  };
  const cards = [   
    { id: 1,Text:"Add Admin User" ,click:redirectToChangePassword,dis :"This is place for adding new admins.",imgSRC :"https://tse1.mm.bing.net/th/id/OIG3.QQ9nU73gFjESl7TJ_Bxq?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" },
    { id: 2,Text:"Add Item" ,click:redirectToChangeAddress,dis :"This is place for adding new items.",imgSRC: "https://tse1.mm.bing.net/th/id/OIG2..glXo.0NMcM8_rENYs7Q?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"},
    { id: 3,Text:"Edit Item" ,click:redirectToChangeAddress,dis :"This is place for editting items.",imgSRC: "https://tse4.mm.bing.net/th/id/OIG1.g7qB9d0lMGAcixEd9kVe?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"},
    { id: 4,Text:"Add Item group" ,click:redirectToChangeAddress,dis :"This is place for cadding new group items.",imgSRC: "https://tse1.mm.bing.net/th/id/OIG2.zRv20i_4eV2oMN_ebgBw?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"},
    { id: 5,Text:" All registered Orders" ,click:redirectToChangeAddress,dis :"This is place for report all registered Orders .",imgSRC: "https://tse4.mm.bing.net/th/id/OIG1.AT0K76ZDgbanCHz3H4ZX?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"},
    
    // Add more cards as needed
  ];
  

  return (
    <div style={{ display: 'flex', gap: '25px', maxWidth: '1500px', margin: '0 auto' }}>
      {cards.map((card) => (
        <Card sx={{ maxWidth: 400 }} onClick= {card.click} >
        <CardMedia
          sx={{ height: 200 }}
          image={card.imgSRC}
          title={card.Text}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {card.Text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {card.dis}
          </Typography>
        </CardContent>
      </Card>
      ))}
    </div>
  );
};

export default AdministrationCardList;
