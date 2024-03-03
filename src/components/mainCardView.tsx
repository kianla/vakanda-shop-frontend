import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MyCardList ()  {
  const cards = [   
    { id: 1, imgSRC :"https://dkstatics-public.digikala.com/digikala-adservice-banners/5fd8f0332cf6be15050963bc450ccf804fd30c19_1708762157.jpg?x-oss-process=image/quality,q_95/format,webp" },
    { id: 2, imgSRC: "https://dkstatics-public.digikala.com/digikala-adservice-banners/37ff129e9e0c8f3d6a90a7f19b5c5089a4bf70d3_1708435418.jpg?x-oss-process=image/quality,q_95/format,webp"},
    { id: 3, imgSRC: "https://dkstatics-public.digikala.com/digikala-adservice-banners/daf837215f736cba3487f6015b1c12a9c36b16f7_1708951332.jpg?x-oss-process=image/quality,q_95/format,webp" },
    { id: 4, imgSRC: "https://dkstatics-public.digikala.com/digikala-adservice-banners/5e15748e3770c57c9a19d455e522a11cafb0d980_1709124183.jpg?x-oss-process=image/quality,q_95/format,webp" },
    // Add more cards as needed
  ];
  const navigate = useNavigate();
  const redirectToShop = () => {
   
  };

  return (
    <div style={{ display: 'flex', gap: '25px', maxWidth: '1500px', margin: '0 auto' }}>
      {cards.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 370 }} onClick={redirectToShop} >
            
          <CardMedia
        component="img"
        height="333"
        image= {card.imgSRC}
        
         />
        </Card>
      ))}
    </div>
  );
};

export default MyCardList;
