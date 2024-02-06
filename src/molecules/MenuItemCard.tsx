// React engine
import { useState, FC } from 'react';

import { Typography, Box, Button } from '@mui/material';

import { useTheme } from '@mui/material/styles';

// My Components, Types
import GridCard from '@/modals/GridCard';

// API Types
import { MenuItem } from '@/api/menu';

const defaultImageUrl = '';

export type MenuItemCardProps = MenuItem & {
  addSelfToOrder: () => void;
};

const MenuItemCard: FC<MenuItemCardProps> = (props) => {
  const theme = useTheme();

  // Delete confirmation dialog
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  const handleCancelAndClose = () => {
    handleDeleteClose();
    // props.deleteAlert();
    // firebase.firestore().doc(props.docPath).delete();
  };

  return (
    <GridCard>
      <Box
        component={'img'}
        sx={{
          padding: theme.spacing(1),
          maxWidth: '70%',
          height: '10em',
          objectFit: 'contain',
        }}
        src={props.imageUrl ?? defaultImageUrl}
      />
      <Box
        sx={{
          fontWeight: 'bold',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {props.name}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: theme.spacing(1),
          flexGrow: 1,
          verticalAlign: 'top',
        }}
      >
        <Typography variant="body2">{props.description}</Typography>
        <Typography variant="body2">${props.price}</Typography>
      </Box>
      <Box
        sx={{
          padding: theme.spacing(1),
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={props.addSelfToOrder}
        >
          Add to Order
        </Button>
      </Box>
      {/* <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Delete Menu for ${props.item.destination}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This Menu will be cancelled immediately. Any produce already paid
            for will be shipped as ordered, and billing will stop.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleCancelAndClose} color="secondary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog> */}
    </GridCard>
  );
};

export default MenuItemCard;
