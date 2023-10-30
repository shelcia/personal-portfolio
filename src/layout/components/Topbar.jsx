import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "../../assets/icons/hamburger-menu.svg";

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
    name: "Devlogs",
    link: "/devlogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Topbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontStyle: "italic" }}
        className="text-serif"
      >
        Shelcia.
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

  return (
    <>
      <AppBar
        component="nav"
        color="transparent"
        sx={{ boxShadow: "none", borderBottom: "1px solid #000" }}
        position="absolute"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                sm: "block",
              },
              fontStyle: "italic",
            }}
            className="text-serif"
          >
            <Link to="/">Shelcia.</Link>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <img src={MenuIcon} alt="Menu Icon" height={20} width={20} />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                data-cursor-text={item.name}
                data-cursor-size="80px"
                className="topbar-link"
                // style={({ isActive, isPending, isTransitioning }) => {
                //   return {
                //     fontWeight: isActive ? 800 : "",
                //     color: isPending ? "red" : "black",
                //     viewTransitionName: isTransitioning ? "slide" : "",
                //   };
                // }}
              >
                <Button>{item.name}</Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor={"right"}
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
    </>
  );
};

export default Topbar;
