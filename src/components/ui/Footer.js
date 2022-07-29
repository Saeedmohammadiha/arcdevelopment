import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Hidden, makeStyles } from '@material-ui/core';
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon:{
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2em',
      width: '2em'
    }
  },
  socialContainer:{
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '.6em'
    }
  }
}));
export default function Footer({
  value,
  setValue,
  setSelectedIndex,
  selectedIndex,
}) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent="center"
          spacing={4}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapp"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/website"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/vision"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/technology"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/pprocess"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/history"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/team"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt="footer" className={classes.adornment} />
      <Grid container className={classes.socialContainer} justifyContent='flex-end' spacing={2}>
        <Grid item component={'a'} href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
          <img className={classes.icon} alt="facebook" src={facebook} />
        </Grid>
        <Grid item component={'a'} href='https://www.twitter.com'rel='noopener noreferrer' target='_blank'>
          <img className={classes.icon} alt="twitter" src={twitter} />
        </Grid>
        <Grid item component={'a'} href='https://www.instagram.com'rel='noopener noreferrer' target='_blank'>
          <img className={classes.icon} alt="instagram" src={instagram} />
        </Grid>
      </Grid>
    </footer>
  );
}
