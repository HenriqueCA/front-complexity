import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import { fade } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
    marginTop: '2%',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'black'
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#808080', 0.7), 
    '&:hover' : {
      backgroundColor: fade('#808080', 0.75), 
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class HomeToolbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      searchBy: ''
    }
  }

  handleEnter = event => {
    if((event.which == 13 || event.keyCode == 13) && event.target.value !== ''){
      this.setState({ redirect: true, searchBy: event.target.value });
    }
  }
 

  render() {
    const { classes } = this.props;
    const { redirect, searchBy } = this.state;

    return (redirect ? (
      <Redirect to={`/profile/?user=${searchBy }`}/>
    ) : (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Home
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <FontAwesomeIcon icon={faSearch}/>
              </div>
              <InputBase
                onKeyDown={this.handleEnter}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    ))
  }
}
export default withStyles(styles)(HomeToolbar);