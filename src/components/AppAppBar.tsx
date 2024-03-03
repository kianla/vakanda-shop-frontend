import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);
  const currentUser = window.localStorage.getItem("email");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();
  const redirectToDashboard = () => {
    navigate('/Dashboard'); 
  };
  const redirectToShop = () => {
    navigate('/Shop'); 
  };
 
  const handleLogout = () => {
    // Handle profile logic here
    window.localStorage.setItem('user_id', "");
    window.localStorage.setItem('email', "");
    window.localStorage.setItem('password', "");
    window.localStorage.setItem('Type', "");
    window.location.reload();
  };


  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(0, 0, 0, 0.1.9)'
                  : 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(29px)',
              maxHeight: 40,
              border: '2px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Typography variant="body1" color="primary" fontSize= "25px">
                    VAKANDA
               </Typography>
               {currentUser && (
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={redirectToShop}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.light" fontSize= "15px">
                    Shop
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={redirectToDashboard}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.light"fontSize= "15px">
                  Dashboard
                  </Typography>
                </MenuItem>
              
               
              </Box>
                )}
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
               {currentUser && (
                <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
              )}
          
              {!currentUser && (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/SignIn"
                  target="_blank"
                >
                  Sign in
                </Button>
              )}
              {!currentUser && (
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/SignUp"
                target="_blank"
              >
                Sign up
              </Button>
              )}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
               
                sx={{ minWidth: '30px', p: '4px' }}
              >
              
              </Button>
              <Drawer anchor="right" >
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  
                  </Box>
                  <MenuItem onClick= {redirectToShop}>
                  Shop
                  </MenuItem>
                  <MenuItem onClick={redirectToDashboard}>
                  Dashboard
                  </MenuItem>
                 
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/SignUp"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/SignIn"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
