import { FC, PropsWithChildren } from 'react';
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
} from '@mui/material';

import { RecyclingOutlined } from '@mui/icons-material/';

import { MenuItem } from '@/api/menu';

type OrderDrawerProps = {
  order: number;
  items: MenuItem[];
  editItem: (index: number) => void;
  removeItem: (index: number) => void;
};

const drawerWidth = 240;

const OrderDrawer: FC<PropsWithChildren<OrderDrawerProps>> = (props) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>{props.children}</Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ['&.MuiDrawer-paper']: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Order Details
          </Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {props.items.map((item, index) => (
              <>
                <ListItem key={`order-item-${index}`} disablePadding>
                  <ListItemButton onClick={() => props.editItem(index)}>
                    <ListItemText
                      primary={item.name}
                      secondary={`$${item.price}`}
                    />
                    <ListItemIcon></ListItemIcon>
                    {item.options.map((option, index2) =>
                      option.choices
                        .filter((choice) => choice.selected)
                        .map((choice, index3) => (
                          <ListItemText
                            key={`order-item-${index}-opt-${index2}-${index3}`}
                            secondary={
                              choice.text +
                              (choice.price ? ` - +$${choice.price}` : '')
                            }
                          />
                        ))
                    )}
                  </ListItemButton>
                  <ListItemButton
                    style={{ minHeight: '100%' }}
                    onClick={() => props.removeItem(index)}
                  >
                    <RecyclingOutlined />
                  </ListItemButton>
                </ListItem>
                <Divider key={`order-item-${index}-divider`} />
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default OrderDrawer;
