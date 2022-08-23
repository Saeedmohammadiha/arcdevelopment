import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));
export default function Services({ setSelectedIndex, setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column">
      <Grid
        itrm
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          variant="h2"
          align={matchesSM ? 'center' : undefined}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*-----ios/android Block----- */}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">ios/Android Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Extend Functionality, Extend Access, Increas Engagement
            </Typography>
            <Typography variant="subtitle1">
              integrate your web experience or create a standalone app{' '}
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="mobile icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----software Block----- */}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Save Energy, Save Time, Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital Solution, From Investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="customSoftwareIcon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----website Block----- */}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Reach More, Discover More, Sell More
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={websiteIcon}
              alt="website Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
