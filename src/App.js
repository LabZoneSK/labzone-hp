import React, { Component } from 'react'
import './App.scss'

import NavBar from './common/NavBar'
import Hero from './common/Hero'

import Home from './home'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Hero />
          <Home />
        </main>
        <footer className="labzone-footer has-text-centered">
          &copy;{new Date().getFullYear()} LabZone s.r.o.
        </footer>
      </React.Fragment>
    )
  }
}

export default App
