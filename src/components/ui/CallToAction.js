import React from 'react';
import {Link} from 'react-router-dom'
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import ButtonArrow from './ButtonArrow';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyle = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    marginLeft: 0,
    }
  },
}));

export default function CallToAction({setValue}) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justifyContent={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5em' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              justifyContent={matchesSM ? 'center' : undefined}
              item
            >
              <Button component={Link} to='/revolution' onClick={()=>setValue(2)} variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 5 }}> Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button component={Link} to='/estimate' onClick={()=>setValue(5)} variant="contained" className={classes.estimateButton}>
          free estimate
        </Button>
      </Grid>
    </Grid>
  );
}
