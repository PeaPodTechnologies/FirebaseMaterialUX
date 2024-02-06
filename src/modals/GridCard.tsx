import { FC, PropsWithChildren } from 'react';

import { Paper, Grid } from '@mui/material';

import { useTheme } from '@mui/material/styles';

const GridCard: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          padding: theme.spacing(3),
          color: theme.palette.text.secondary,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '20em',
        }}
        elevation={5}
      >
        {children}
      </Paper>
    </Grid>
  );
};

export default GridCard;
