import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import {
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItemText,
  ListItem,
} from '@material-ui/core';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
//در دیفالت تم در قسمت میکسین ها تولبار فقط ارتفاع دارد
//ار این ارتفاع استفاده مکنیم تا یک فضای خالی پشت اپ بار قرار دهیم
//تا محتوای زیر ان به پایین هل داده شود
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover':{
      backgroundColor: theme.palette.secondary.light
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {

    '& .MuiListItemText-root': {
      opacity: 1,
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal +1
  }
}));

export default function Header({value ,setValue ,setSelectedIndex, selectedIndex  }) {
  const classes = useStyles();
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapp' },
    { name: 'Website Development', link: '/website' },
  ];

  const routs = [
    {name: 'Home', link: '/'},
    {name: 'Services', link: '/services'},
    {name: 'Custom Software Development', link: '/customsoftware'},
    {name: 'Mobile App Development', link: '/mobileapp'},
    {name: 'Website Development', link: '/website'},
  ]
  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapp':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/wedsites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value, menuOptions, selectedIndex, routs]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          onMouseOver={(event) => handleClick(event)}
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        classes={{ paper: classes.menu }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{zIndex:1302}}
      >
        {menuOptions.map((option, index) => {
          return (
            <MenuItem
              key={`${option}${index}`}
              classes={{ root: classes.menuItem }}
              to={option.link}
              component={Link}
              onClick={(e) => {
                handleMenuItemClick(e, index);
                setValue(1);
                handleClose();
              }}
              selected={index === selectedIndex && value === 1}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        classes={{ paper: classes.drawer }}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            selected={value === 0}
            divider
            button
            classes={{selected : classes.drawerItemSelected}}
            component={Link}
            to="/"
            onClick={() => {
              setOpenDrawer(false);
              setValue(0)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
          selected={value === 1}
            divider
            button
            component={Link}
            to="/services"
            onClick={() => {
              setOpenDrawer(false);
              setValue(1)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
           selected={value === 2}
            divider
            button
            component={Link}
            to="/revolution"
            onClick={() => {
              setOpenDrawer(false);
              setValue(2)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Revolution
            </ListItemText>
          </ListItem>
          <ListItem
           selected={value === 3}
            divider
            button
            component={Link}
            to="/about"
            onClick={() => {
              setOpenDrawer(false);
              setValue(3)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About us
            </ListItemText>
          </ListItem>
          <ListItem
           selected={value === 4}
            divider
            button
            component={Link}
            to="/contact"
            onClick={() => {
              setOpenDrawer(false);
              setValue(4)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact us
            </ListItemText>
          </ListItem>
          <ListItem
          selected={value === 5}
            classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
            divider
            button
            component={Link}
            to="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              setValue(5)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img className={classes.logo} src={logo} alt="logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* فضای خالی به اندازه خود اپ بار برای نشان دادن محتوای زیر ان  */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
