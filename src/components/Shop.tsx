import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ShopTabs from './ShopTabs';
import OrderAPI from '../api/order'
import { orderNormalizer } from '../utils/common'
import { Item, Order } from '../types/common'
import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import Review from './Review';

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
const drawerWidth: number = 0;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Shop() {
  const currentUserId = window.localStorage.getItem("user_id");
  const [open, setOpen] = React.useState(true);
  const [order, setOrder] = React.useState<Order | null>(null);
  const [orderItems, setOrderItems] = React.useState<Array<Item>>([]);
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    getCurrentOrder();
  }, [currentUserId]);

  React.useEffect(() => {
    if (order) {
      getOrderItems(order.id);
    }
  }, [order]);

  const getCurrentOrder = async () => {
    if (currentUserId)
      await OrderAPI.getCurrentOrder(Number(currentUserId)).then(response => {
        setOrder(orderNormalizer(response.data));
      });
  }

  const getOrderItems = async (orderId: number) => {
    await OrderAPI.getOrderItems(orderId).then(response => {
      setOrderItems(response.data);
    });
  }

  const handleAddOrderAction = async (id: number) => {
    if (order && id) {
      await OrderAPI.createOrderItem(order.id, id).then(response => {
        getOrderItems(order.id);
      })
    }
  }

  const handleDeleteOrderItem = async (id: number) => {
    if (order && id) {
      await OrderAPI.deleteOrderItem(id).then(response => {
        setOrderItems(orderItems.filter(item => item.id !== id));
      })
    }
  }

  const handleSaveOrder = async () => {
    if (order) {
      await OrderAPI.updateOrderItem(order.id, Number(calcTotalPrice().toFixed(2))).then(response => {
        getCurrentOrder();
        setDialogOpen(false);
      });
    }
  }

  const calcTotalPrice = () => {
    let sum = 0;
    orderItems.map(item => sum += item.price);
    return sum;
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
             
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Shop
            </Typography>

            <IconButton color="inherit" onClick={() => setDialogOpen(true)}>
              <Badge badgeContent={<Typography>{orderItems.length ?? 0}</Typography>} color="secondary" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
           
            <Divider sx={{ my: 1 }} />
           
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <ShopTabs onAction={(id) => handleAddOrderAction(id)} />
          <Divider sx={{ my: 1 }} />
            <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>

      <Dialog open={dialogOpen} fullWidth>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <Stack gap={3} divider={<Divider/>}>
            <Review orderItems={orderItems} onOrderItemDelete={(id: number) => handleDeleteOrderItem(id)} />
            <Button variant={'contained'} onClick={handleSaveOrder}>Save Order</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
