import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import elvyaIcon from "../../public/BrandIcons/evlya-circle.svg"
import { Search } from '@mui/icons-material';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },

];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState("")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MyBrand
      </Typography> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} passHref>
              <ListItemText
                primary={
                  <Typography
                    component="a"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      padding: 1,
                      display: 'block',
                      width: '100%',
                      cursor: 'pointer'
                    }}
                    className='nunito-Regular'
                  >
                    {item.label}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static" className='bg-elvyaGreen-500'>
        <Toolbar  className='bg-elvyaGreen-500'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' , width:'30%'} }}
          >
            <Image src={elvyaIcon} alt='' width={100} height={100}/>
          </Typography>
          <div className='w-[50%]'>
            <TextField
            placeholder="Search date spots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ maxWidth: 400 , bgcolor:'#fff' , borderRadius:'8px', width:'70%'}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search  />
                </InputAdornment>
              ),
            }}
          />
          </div>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button sx={{ color: '#fff' }} className='nunito-Regular'>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>

      </Box>
    </>
  );
};

export default Navbar;