import { Container, Typography, ThemeProvider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Users from './pages/user/Users'
import NavBar from './components/navbar/NavBar'
import theme from './theme'
import Home from './pages/home/Home'

const App = () => {
  const classes = styles()

  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
        </header>

        <Container className={classes.root}>
          <Typography component='div' className={classes.main}>
            <Typography variant={width > 600 ? 'h4' : 'h6'} align='center'>
              Hello and welcome to my project
            </Typography>

            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/register' exact component={Register} />
              <Route path='/users' exact component={Users} />
            </Switch>
          </Typography>
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
