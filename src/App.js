import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import Button from './common/Button'
import NavBar from './common/NavBar'
import Hero from './common/Hero'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Hero />
          <section className='App section'>
            <div className='container'>
              <h1 className='title'>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                porta sem sit amet augue varius pharetra. Pellentesque laoreet,
                quam in efficitur euismod, sapien nisl pharetra turpis, et
                vestibulum sem est id nibh. Suspendisse dictum nunc sit amet
                diam tincidunt, et tincidunt risus pellentesque. Cras ultricies
                nisi arcu, in tristique lorem semper et. Vestibulum sodales
                neque nibh, a volutpat sem semper nec. Suspendisse potenti.
                Vestibulum vel odio vitae risus mollis commodo. Nam sit amet
                risus nisl. In pulvinar libero eget massa vehicula, ut suscipit
                elit dignissim. Cras quis tempus justo. Integer mi odio, congue
                id arcu non, suscipit maximus dolor. Sed et sapien sit amet eros
                iaculis tincidunt sit amet a lorem. Integer porttitor ante a
                diam hendrerit, ac scelerisque elit sodales. Etiam placerat,
                elit non commodo auctor, justo elit accumsan sapien, vitae
                malesuada arcu turpis ut turpis. Interdum et malesuada fames ac
                ante ipsum primis in faucibus.
              </p>

              <Button label='Sluzby' />
            </div>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default App
