import React from 'react'

import './Section.scss'
const Section = ({ title, children }) => {
  console.log(children)
  return (
    <section className='App section'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        {children}
      </div>
    </section>
  )
}

export default Section
