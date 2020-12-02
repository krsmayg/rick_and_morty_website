import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/logo-2.png";
const useStyles = makeStyles({
  header: {
    background: "#fff",
    color: "#000",
    // boxShadow: "none",
    // borderBottom: '1px solid #10162f'
    zIndex: '333333'
  },
  navigationItem: {
    marginLeft: "15px",
    color: "#000",
    '& a': {
      transition: 'all 0.3s',
      padding: 8
    },
    '& a:hover': {
      cursor: 'pointer',
      color: "#20b6cc",
      // boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      background: "#000",
      borderRadius: 5
    }
  },
  toolbar: {
    justifyContent: "space-between",
    margin: "10px 3rem",
  },
  logo: {
    width: 120,
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        {/* <Typography variant="h4">Ricky app</Typography> */}
        <img src={logoSrc} className={classes.logo} />
        <div className="right-nav">
          <Typography variant="h4" className={classes.navigationItem}>
            <Link to="/characters">Characters</Link>
          </Typography>
          <Typography variant="h4" className={classes.navigationItem}>
            <Link to="/locations">Locations</Link>
          </Typography>
          <Typography variant="h4" className={classes.navigationItem}>
            <Link to="/episodes">Episodes</Link>
          </Typography>
          <Typography variant="h4" className={classes.navigationItem}>
            <Link to="/watch-list">Watch List</Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
