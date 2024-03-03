import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemAPI from '../api/item'
import { Item, ItemGroup } from '../types/common'
import ItemCard from './ItemCard'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/material';



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

const converToTabOption = (item: ItemGroup) => ({ id: item.id, label: item.name })

type Props = {
  onAction: (id: number) => void;
}


export default function ShopTabs({ onAction }: Props) {
  const [tabs, setTabs] = React.useState<Array<{ id: number, label: string }>>([]);
  const [items, setItems] = React.useState<Array<Item>>([]);
  const [value, setValue] = React.useState(0);
 

  React.useEffect(() => {
    getItemGroups();
  }, []);

  React.useEffect(() => {
    getItemsByGroupId(value);
  }, [value]);

  const getItemGroups = async () => {
    await ItemAPI.fetchItemGroup().then(response => {
      let itemGroups: Array<ItemGroup> = response.data;
      if(itemGroups.length > 0) {
        setTabs(itemGroups.map(item => converToTabOption(item)));
        setValue(itemGroups[0].id);
      }
    })
  }

  const getItemsByGroupId = async (value: number) => {
    await ItemAPI.getItemsByGroupId(Number(value)).then(response => {
      setItems(response.data);
    })
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCardAction = (id: number) => {
    onAction(id);
  };

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
        {tabs.map(tab => (
          <Tab key={tab.id} label={tab.label} value={tab.id} {...a11yProps(tab.id)} sx={{ alignItems: 'flex-start' }} />
        ))}
      </Tabs>
      <TabPanel value={value} index={value}>
        <div style={{ display: 'flex', gap: '30px', maxWidth: '800px', margin: '10 auto' }}>
          {items.map(item => (
            <ItemCard item={item} onAction={(id) => handleCardAction(id)} />
          ))}
      
        </div>
      </TabPanel>

    </Box>
  );
}