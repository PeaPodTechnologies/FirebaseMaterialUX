// import '@/styles/globals.css';

import { FC } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';

// import POS from '@/pages/POS';

// .palette
// .typography
// .spacing
// .breakpoints
// .zIndex
// .transitions
// .components
const theme = createTheme({
  // components: {
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         fontFamily: 'AvantGarde',
  //       },
  //     },
  //   },
  // },
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#F4F4F7',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    primary: {
      main: '#000000',
      light: '#F4F4F7',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F4F4F7',
      contrastText: '#FFFFFF',
    },
  },
});

const App: FC = () => {
  // TODO: Insert admin route handler
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* <POS /> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;

// const _app = () => {
//   const [notificationIsOpen, setNotification] = useState(false);
//   return (
//     <>
//       <Button
//         variant="contained"
//         onClick={() => {
//           setNotification(true);
//         }}
//       >
//         Notify Me
//       </Button>
//       <Notification
//         openState={notificationIsOpen}
//         onClose={() => {
//           setNotification(false);
//         }}
//       >
//         Test success!
//       </Notification>
//     </>
//   );
// };

// export default _app;
