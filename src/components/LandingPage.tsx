import * as React from 'react';
import { Grid, Link, PaletteMode, Paper, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppAppBar from './AppAppBar';
import MyCardList from './mainCardView';

const defaultTheme = createTheme({});


interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '10dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'navy',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={'light'} toggleColorMode={function (): void {
              throw new Error('Function not implemented.');
          } }  />
      
      <Box sx={{ bgcolor: 'navy' }}>
       
        
        <Divider/>

        <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.900',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://dkstatics-public.digikala.com/digikala-adservice-banners/2d6fbf95bf06698909a6a5b90507c0e0911e760d_1708529400.gif?x-oss-process=image?x-oss-process=image/format,webp)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src= "https://dkstatics-public.digikala.com/digikala-adservice-banners/2d6fbf95bf06698909a6a5b90507c0e0911e760d_1708529400.gif?x-oss-process=image?x-oss-process=image/format,webp" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.7)',
        }}
      />
      <Grid container>
        <Grid item md={90}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 10, md: 20 },
              pr: { md: -10 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              
            </Typography>
            <Link variant="subtitle1" href="#">
              
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
      
    <Divider />
        <MyCardList></MyCardList>
      
      
      </Box>
    </ThemeProvider>
  );
}