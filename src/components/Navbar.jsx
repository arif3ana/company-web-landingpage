import React, {useState} from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  const theme = useTheme();

  const pages = ["Home", " About Us", "Pages"];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <AppBar
        component='nav'
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          paddingX: 2,
          position: "fixed",
          top: 0,
        }}>
        <Toolbar>
          <Typography
            variant='h5'
            component={"div"}
            sx={{
              flexGrow: 1,
              color: theme.palette.common.white,
              fontWeight: "bold",
            }}>
            ProRent
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{display: {xs: "none", sm: "flex"}}}>
            <Link to={"/"}>
              <Button
                variant='text'
                href='/'
                className='nav-link'
                style={{color: theme.palette.common.white, fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
            <Link to={"/aboutus"}>
              <Button
                variant='text'
                href='/aboutus'
                className='nav-link'
                style={{color: theme.palette.common.white, fontWeight: "bold"}}>
                About Us
              </Button>
            </Link>
            <Link to={"/services"}>
              <Button
                variant='text'
                href='/services'
                className='nav-link'
                style={{color: theme.palette.common.white, fontWeight: "bold"}}>
                Services
              </Button>
            </Link>
            <Link to={"/contact"}>
              <Button
                variant='contained'
                disableElevation
                style={{color: theme.palette.common.white, fontWeight: "bold"}}>
                Contact
              </Button>
            </Link>
          </Stack>
          <IconButton
            sx={{
              display: {sm: "none"},
              mr: 1,
              color: theme.palette.common.white,
              fontWeight: "Bold",
            }}
            size='large'
            edge='start'
            aria-haspopup='true'
            aria-label='menu'
            onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {xs: "block", md: "none"},
            }}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} color=''>
                <Typography
                  textAlign='center'
                  sx={{color: theme.palette.text.secondary}}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
