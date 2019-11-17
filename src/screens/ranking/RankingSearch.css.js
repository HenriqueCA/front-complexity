import { fade, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {//
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
      color: 'black'//
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade('#808080', 0.7), 
    //   fade(theme.palette.primary.light, 0.65),//
      '&:hover' : {
        backgroundColor: fade('#808080', 0.75), 
        //fade(theme.palette.primary.light, 0.75),//
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
  }));


export default styles;