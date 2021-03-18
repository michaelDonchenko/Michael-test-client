import { Container, Typography, ThemeProvider } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Users from './pages/user/Users'
import NavBar from './components/navbar/NavBar'
import theme from './theme'

const App = () => {
  const classes = styles()

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
        </header>

        <Container className={classes.root}>
          <Typography component='div' className={classes.main}>
            <Typography variant='h3'>
              Hello and welcome to my project
            </Typography>

            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/users' component={Users} />
            </Switch>
          </Typography>
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
