import { FC, PropsWithChildren } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type NotificationProps = PropsWithChildren<{
  openState: boolean;
  onClose: () => void;
}>;

const Notification: FC<NotificationProps> = (props, context) => {
  return (
    <Snackbar
      open={props.openState}
      autoHideDuration={6000}
      onClose={props.onClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={props.onClose}
        severity="success"
      >
        {props.children}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
