import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemAPI from '../api/item';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://https://vakanda.info//">
        Vakanda
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddNewItem() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    await ItemAPI.AddItem(
      data.get('Item Name') as string,
      data.get('discription') as string,
      data.get('photo') as string,
      data.get('item_count') as unknown as number,
      data.get('price') as unknown as number,
      data.get('group_id') as unknown as number,
    ).then((response) => {
      navigate('/Dashboard') 
    }).catch(error => console.log(error))
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginLeft: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Item
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="null"
                  name="Item Name"
                  required
                  fullWidth
                  id="ItemName"
                  label="Item Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="discription"
                  label="Discription"
                  name="discription"
                  autoComplete="discription"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="photo"
                  label="Photo URL"
                  name="photo"
                  autoComplete="https://th.bing.com/th/id/OIG2.sEmnADauMy8fKOD81QbJ?w=270&h=270&c=6&r=0&o=5&dpr=1.6&pid=ImgGn"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="item_count"
                  label="Item count"
                  type="item_count"
                  id="item_count"
                  autoComplete="0"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="price"
                  type="price"
                  id="price"
                  autoComplete="0"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="group_id"
                  label="Group id"
                  type="group_id"
                  id="group_id"
                  autoComplete="0"
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
          
        </Box>
        <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
}
