"use client";
import { red } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { FormControlLabel, FormGroup, Link, Slide } from "@mui/material";

const pages = ["Page", "Service", "Contact Us", "Blogs"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ themeToggle, themeColor }) => {
   const [anchorElNav, setAnchorElNav] = useState(null);
   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const trigger = useScrollTrigger();

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         <AppBar sx={{ bgcolor: "#01BDB2" }} enableColorOnDark>
            <Container maxWidth="xl">
               <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
                  <MedicalServicesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                  <Typography
                     variant="h4"
                     noWrap
                     component="a"
                     href="/"
                     sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                     }}
                  >
                     MediCure
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
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
                           display: { xs: "block", md: "none" },
                        }}
                     >
                        <Link underline="hover" href="/">
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">Home</Typography>
                           </MenuItem>
                        </Link>
                        <Link underline="hover" href="/page">
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">Page</Typography>
                           </MenuItem>
                        </Link>
                        <Link underline="hover" href="/services">
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">Services</Typography>
                           </MenuItem>
                        </Link>
                        <Link underline="hover" href="/contact">
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">Contact Us</Typography>
                           </MenuItem>
                        </Link>
                        <Link underline="hover" href="/Blogs">
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">Blogs</Typography>
                           </MenuItem>
                        </Link>
                     </Menu>
                  </Box>
                  <MedicalServicesIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                  <Typography
                     variant="h5"
                     noWrap
                     component="a"
                     href=""
                     sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                     }}
                  >
                     MediCure
                  </Typography>
                  <Box
                     sx={{
                        flexGrow: 1,
                        justifyContent: "end",
                        mr: "10px",
                        display: { xs: "none", md: "flex" },
                     }}
                  >
                     <Link underline="hover" sx={{ "&:hover": { textDecorationColor: "white" } }} href="/">
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                           Home
                        </Button>
                     </Link>
                     <Link
                        underline="hover"
                        sx={{ "&:hover": { textDecorationColor: "white" } }}
                        href="/page"
                     >
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                           Page
                        </Button>
                     </Link>
                     <Link
                        underline="hover"
                        sx={{ "&:hover": { textDecorationColor: "white" } }}
                        href="/services"
                     >
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                           Services
                        </Button>
                     </Link>
                     <Link
                        underline="hover"
                        sx={{ "&:hover": { textDecorationColor: "white" } }}
                        href="/contact"
                     >
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                           Contact us
                        </Button>
                     </Link>
                     <Link
                        underline="hover"
                        sx={{ "&:hover": { textDecorationColor: "white" } }}
                        href="/blogs"
                     >
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                           Blogs
                        </Button>
                     </Link>
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                     <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                           <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                     </Tooltip>
                     <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                     >
                        <MenuItem onClick={handleCloseUserMenu}>
                           <Link underline="hover" href="/profile">
                              <Typography textAlign="center">Profile</Typography>
                           </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                           <Link underline="hover" href="/profile">
                              <Typography textAlign="center">Dashboard</Typography>
                           </Link>
                        </MenuItem>

                        <MenuItem
                           onClick={() => {
                              console.log("coming logout");
                           }}
                        >
                           <Typography
                              sx={{ "&:hover": { borderBottom: "1px solid #1976D2" }, color: "#1976D2" }}
                              textAlign="center"
                           >
                              Log Out
                           </Typography>
                        </MenuItem>

                        <MenuItem>
                           <FormGroup>
                              <FormControlLabel
                                 onChange={themeToggle}
                                 control={<Switch defaultChecked />}
                                 label="Theme"
                              />
                           </FormGroup>
                        </MenuItem>
                     </Menu>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
      </Slide>
   );
};

export default Navbar;
