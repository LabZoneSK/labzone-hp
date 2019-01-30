import React from 'react'

const NavBar = () => {
  return (
    <nav class='navbar is-fixed-top is-transparent' role='navigation' aria-label='main navigation'>
      <div className='container is-fluid'>
        <div class='navbar-brand'>
          <a class='navbar-item' href='https://bulma.io'>
            <img
              src='media/logo-white-small.png'
              height='50'
            />
            <span className="brand-name has-text-white">LabZone</span>
          </a>

          <a
            role='button'
            class='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div class='navbar-menu'>
          <div class='navbar-end is-uppercase'>
            <a className='navbar-item has-text-white' href='#'>
              Služby
            </a>
            <a className='navbar-item has-text-white' href='#'>
              Projekty
            </a>
            <a className='navbar-item has-text-white' href='#'>
              Team
            </a>
            <a className='navbar-item has-text-white' href='#'>
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
