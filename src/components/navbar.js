import React from 'react';

// import ccs
import './navbar.css';

// import components
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FlightIcon from '@material-ui/icons/Flight';
import LanguageIcon from '@material-ui/icons/Language';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Link } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    position: 'static',
    width: theme.spacing(9) + 1,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    display: 'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    background: '#edeff0',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: '#edeff0',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
      setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className="navBar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={toggleDrawer}>
            {open === false ? <ChevronRightIcon className="iconColor"/> : <ChevronLeftIcon className="iconColor"/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Design', 'Travel'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to='/'>
                    {index === 0 && <HomeOutlinedIcon className="iconColor"/>}
                </Link>
                <Link to='/design'>
                    {index === 1 && <LanguageIcon className="iconColor"/>}
                </Link>
                <Link to='/travel'>
                    {index === 2 && <FlightIcon className="iconColor"/>}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Resume', 'LinkedIn', 'GitHub', 'Email'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to='/resume'>
                    {index === 0 && <AttachmentIcon className="iconColor"/>}
                </Link>
                <a href="https://www.linkedin.com/in/cora-chan-251a6315b/" rel="noopener noreferrer" target="_blank">
                    {index === 1 && <LinkedInIcon className="iconColor"/>}
                </a>
                <a href="https://github.com/cchan207" rel="noopener noreferrer" target="_blank">
                    {index === 2 && <GitHubIcon className="iconColor"/>}
                </a>
                <Link to='/contact'>
                    {index === 3 && <MailOutlineIcon className="iconColor"/>}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}