import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import './footer.css';
import { useWindowDimensions } from '../../window.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 50,
    textAlign: 'center',
    fontFamily: "'Courier New', Courier, monospace",
    color: 'grey',
  },
  mfooter: {
    padding: theme.spacing(3, 2),
    marginTop: 50,
    textAlign: 'center',
    fontFamily: "'Courier New', Courier, monospace",
    color: 'grey',
    fontSize: 25,
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  let { width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      {width >= 1000 && (
        <footer className={classes.footer}>
          <text>Copyright © </text>
        <Link a href="https://cchan207.github.io/react-app" color='inherit' className="a">
            Cora Chan
        </Link>
        <text> 2020.</text>
      </footer>
      )}
      {width < 1000 && (
        <footer className={classes.mfooter}>
          <text>Copyright © </text>
        <Link a href="https://cchan207.github.io/react-app" color='inherit' className="a">
            Cora Chan
        </Link>
        <text> 2020.</text>
      </footer>
      )}
    </div>
  );
}