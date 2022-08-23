import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  useTheme,
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from '@material-ui/core';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
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
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

export default function Contact({setValue}) {
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [phone, setPhone] =useState('')
  const [message, setMessage] =useState('')
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid Container direction="row" >
      <Grid container item direction="column" justifyContent="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img src={phoneIcon} alt="phone" style={{ marginRight: '.5em' }} />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
            >
              (555) 555-5555
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="email"
              style={{ marginRight: '.5em', verticalAlign: 'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
            >
              saeed1440124@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField label="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Grid>
          <Grid item>
            <TextField label="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Grid>
          <Grid item>
            <TextField label="Phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </Grid>
        </Grid>
        <Grid item>
          <TextField multiline rows={10} value={message} id='message' onChange={e=>setMessage(e.target.value)} />
        </Grid>
        <Grid item>
          <Button variant='contained'>Send Message <img src={airplane} alt="airplane" /></Button>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9} alignItems='center'>
        
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
    </Grid>
  );
}
