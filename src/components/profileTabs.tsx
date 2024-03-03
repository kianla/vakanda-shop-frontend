import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SettingsCardList from './SettingsCard';
import AdministrationCardList from './AdministrationCard';
import GridviewControl from './UserOrdersView';
import { Item, Order } from '../types/common';
import  OrderAPI  from '../api/order';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);
  const currentUserType = window.localStorage.getItem("Type");
  const [orders, setOrders] = React.useState<Array<Order>>([]);
  const currentUserId = window.localStorage.getItem("user_id");
  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    getOrders(Number(currentUserId));
  }, [currentUserId]);


  const getOrders = async (UserId: number) => {
    await OrderAPI.getUserOrders(UserId).then(response => {
      setOrders(response.data);
      console.log(response.data);
    });
  }
 




  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:"90vh" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Orders" {...a11yProps(0)} />
        <Tab label="Settings" {...a11yProps(1)} />
     
        {currentUserType === "Admin" &&(
          
        <Tab label="Administration" {...a11yProps(2)} />
        )}

      </Tabs>

      <TabPanel value={value} index={0}>
      <GridviewControl orders ={orders} />
      </TabPanel>

      <TabPanel value={value} index={1}>
       <SettingsCardList></SettingsCardList>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <AdministrationCardList></AdministrationCardList>
      </TabPanel>
    </Box>
  );
}