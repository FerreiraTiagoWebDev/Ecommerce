import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  

  return (
    <>
      <AppBar position="fixed" className={mergeClasses.appBar} color="inherit">
        <Toolbar>
          <Typography component ={ Link } to="/" variant="h6" className={classes.tittle} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow}/>
          {location.pathname === "/" && (
          <div className={classes.button}>
            <IconButton component ={ Link } to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;