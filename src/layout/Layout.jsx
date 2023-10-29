import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuIcon from "../assets/icons/hamburger-menu.svg";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
// import Behance from "../assets/icons/behance.svg";
// import Medium from "../assets/icons/medium.svg";

const drawerWidth = 240;
const navItems = [
  {
    name: "Works",
    link: "/works",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Writing",
    link: "/writing",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Layout = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shelcia
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const location = useLocation();
  const currentRouteName = location.pathname;

  const icons = [
    {
      icon: Github,
      link: "https://github.com/shelcia",
      alt: "github",
    },
    {
      icon: LinkedIn,
      link: "https://github.com/shelcia",
      alt: "linkedin",
    },
    // {
    //   icon: Behance,
    //   link: "https://github.com/shelcia",
    //   alt: "behance",
    // },
    // {
    //   icon: Medium,
    //   link: "https://github.com/shelcia",
    //   alt: "medium",
    // },
  ];

  return (
    <>
      <Box
        // sx={{ display: "flex" }}
        className={currentRouteName === "/" ? "home-body" : "body"}
        minHeight={"100%"}
      >
        <CssBaseline />
        <AppBar
          component="nav"
          color="transparent"
          sx={{ boxShadow: "none", borderBottom: "1px solid #000" }}
          position="absolute"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <img src={MenuIcon} alt="Menu Icon" height={20} width={20} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Link to="/">Shelcia</Link>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link key={item.name} to={item.link}>
                  <Button>{item.name}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3, width: "100%" }}>
          <Toolbar />
          <Outlet />
        </Box>
        <Divider />
        <Box
          component="footer"
          sx={{ display: "flex", p: 4, justifyContent: "space-between" }}
        >
          <Typography>Developed & Designed by Shelcia.</Typography>
          <Box>
            {icons.map((icon) => (
              <Tooltip key={icon.alt} title={icon.alt}>
                <MuiLink href={icon.link}>
                  <IconButton>
                    <img
                      src={icon.icon}
                      alt={icon.alt}
                      height={20}
                      width={20}
                    />
                  </IconButton>
                </MuiLink>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
