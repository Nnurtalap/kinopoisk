import { iconComponents, TOP_LISTS, MOVIE_LISTS } from '../../../constans';
import ToggleColorMode, {
  colorModeContext,
} from '../../../context/ToggleColorMode';
import Search from '../Search/search';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  Link,
  Divider,
  Stack,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Icon = ({ iconName }) => {
  const IconName = iconComponents[iconName];
  return <IconName />;
};

export default function Navbar() {
  const { toggleMode, mode } = useContext(colorModeContext);
  const [isOpen, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };
  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LISTS.map(item => (
                    <Link key={item.title} component={RouterLink} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
                {MOVIE_LISTS.map(item => (
                  <Link key={item.title} component={RouterLink} to={item.url}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Icon iconName={item.icon} />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </Box>
            </Drawer>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Typography
                component={RouterLink}
                sx={{ color: 'white', textDecoration: 'none' }}
                variant="h5"
                to="/"
              >
                kinopoisk 0.2
              </Typography>
              <Search />

              <IconButton color="inherit" onClick={toggleMode}>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
