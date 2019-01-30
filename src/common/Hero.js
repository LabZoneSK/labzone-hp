import React from 'react'

const heroStyle = {
  backgroundImage: 'url(media/hero1.jpg)',
};

const Hero = () => {
  return (
    <section className="hero is-info is-medium" style={heroStyle}>
      <div className="hero-body">
        <div className="container is-fluid">
          <h1 className="title is-1">Napredujte vo svete informačných technológií</h1>
          <h2 className="subtitle is-3">Inovatívne riešenia rozvíjajúce váš business</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
