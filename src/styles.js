import { makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },

  main: {
    minHeight: '400px',
    margin: theme.spacing(4, 'auto'),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    width: '70%',
  },

  flexCentered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
  },

  button: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    width: '60%',
    margin: theme.spacing(4, 'auto'),
  },

  navBar: {
    backgroundColor: blue[700],
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  toolBar: {
    width: '100%',
    maxWidth: '1280px',
  },

  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    margin: theme.spacing(0, 2),
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  textField: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    width: '60%',
    margin: theme.spacing(2, 'auto', 2, 'auto'),
  },

  ageField: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    width: '55%',
    margin: theme.spacing(2, 'auto', 2, 'auto'),
  },

  table: {
    margin: theme.spacing(0),
    overflowX: 'auto',
    maxWidth: '100%',
    height: 400,
    width: '100%',
  },

  title: {
    flex: '1',
  },
}))

export default useStyles
