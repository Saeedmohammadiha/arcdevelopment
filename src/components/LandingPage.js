import React from 'react';
import Lottie from 'react-lottie';
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow';
import { Link } from 'react-router-dom';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import CallToAction from './ui/CallToAction';

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));
export default function LandingPage({setValue, setSelectedIndex}) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {' '}
        {/*-----Hero Block----- */}
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology <br /> To the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button component={Link} to='/estimate' onClick={()=>setValue(5)} className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to='/revolution' onClick={()=>setValue(2)} variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
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
            <Button component={Link} to='/customsoftware' onClick={()=>{setValue(1);setSelectedIndex(1)}} variant="outlined" className={classes.learnButton}>
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
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----ios/android Block----- */}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
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
            <Button component={Link} to='/mobileapps'  onClick={()=>{setValue(1);setSelectedIndex(2)}} variant="outlined" className={classes.learnButton}>
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
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Reach More, Discover More, Sell More
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button component={Link} to='/websites'  onClick={()=>{setValue(1);setSelectedIndex(3)}} variant="outlined" className={classes.learnButton}>
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
              src={websiteIcon}
              alt="website Icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revoloution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionaryinsits coupled widt cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                  component={Link} to='/revolution'
                  onClick={()=>setValue(2)}
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      <Grid item>
        {/* information block */}
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ height: '80em', textAlign: matchesXS ? 'center' : 'inherit' }}
        >
          <Grid container style={{ position: 'absolute' }} direction= {matchesXS ? 'column' : 'row'}>
            <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em': '5em' }}>
              <Grid container style={{marginButtom: matchesXS ? '10em' : 0}} direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal</Typography>
                <Grid item>
                  <Button
                  component={Link} to='/about'
                  onClick={()=>setValue(3)}
                    variant="outlined"
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm style={{ marginRight: matchesXS ? 0 :  matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right' }}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say Hello!{' '}
                  <span role="img" aria-label="waving hand">
                    🖐
                  </span>{' '}
                </Typography>
                <Grid item>
                  <Button
                  component={Link} to='/contact'
                  onClick={()=>setValue(4)}
                    variant="outlined"
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>


      <Grid item>
        {/* CallToAction */}
        <CallToAction setValue={setValue}/>
      </Grid>
    </Grid>
  );
}
