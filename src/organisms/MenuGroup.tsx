// React engine
import { useEffect, useState, FC } from 'react';

// MUI Core
import { Box, Typography, Grid } from '@mui/material';

// My Components, Types
import { MenuItem, MenuGroup } from '@/api/menu';
import MenuItemCard from '@/molecules/MenuItemCard';
// import SuccessAlert from './SuccessAlert';

// Props
export type MenuGroupProps = {
  group: MenuGroup;
  addItemToOrder: (item: MenuItem) => void;
};

// Main Component
const MenuGroup: FC<MenuGroupProps> = (props) => {
  // Delete success snackbar
  // const [deleteAlert, setDeleteAlert] = useState(false);
  // const handleDeleteAlertOpen = () => {
  //   setDeleteAlert(true);
  // };
  // const handleDeleteAlertClose = (
  //   event?: React.SyntheticEvent,
  //   reason?: string
  // ) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setDeleteAlert(false);
  // };

  return (
    <Box>
      <Box
        sx={{
          paddingTop: '2%',
          paddingBottom: '2%',
          display: 'flex',
        }}
      >
        <Typography variant="h4">{props.group.name}</Typography>
      </Box>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: 'left',
        }}
      >
        {props.group.items.map((item, index) => {
          return (
            <MenuItemCard
              key={`menu-group-${props.group.name}-item-${index}`}
              {...item}
              addSelfToOrder={() => props.addItemToOrder(item)}
            />
          );
        })}
        {/* <NewMenuItem /> */}
        {/* <SuccessAlert
          openState={deleteAlert}
          onClose={handleDeleteAlertClose}
        >
          Menu cancelled!
        </SuccessAlert> */}
      </Grid>
    </Box>
  );
};

export default MenuGroup;
