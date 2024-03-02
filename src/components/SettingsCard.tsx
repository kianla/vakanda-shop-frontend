import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SettingsCardList ()  {
  const navigate = useNavigate();
  const redirectToChangePassword = () => {
    navigate('/ChangePassword'); 
  };
  const redirectToChangeAddress = () => {
    navigate('/ChangeAddress'); 
  };
  const cards = [   
    { id: 1,Text:"Change Password" ,click:redirectToChangePassword,dis :"This is place for changing yor Password.",imgSRC :"https://tse1.mm.bing.net/th/id/OIG2.wXWNPqUdf0W9R.LT5UDa?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" },
    { id: 2,Text:"Change Address" ,click:redirectToChangeAddress,dis :"This is place for changing yor Adddress.",imgSRC: "https://tse2.mm.bing.net/th/id/OIG3.1ope7qQhbBQeMH8TSLqf?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"},
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

export default SettingsCardList;
