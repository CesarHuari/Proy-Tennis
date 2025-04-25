import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';  

export default function BarraNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky"
              enableColorOnDark
              sx={{
                boxShadow: 3,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                my: 'calc(var(--template-frame-height, 0px) + 28px)',
                mx:'calc(var(--template-frame-height, 0px) + 25%)',
                borderRadius: '80px',
                border : "1px solid white",
                width:' 50%'
              }}>
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                  <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Home
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
    </Box>
  );
}
