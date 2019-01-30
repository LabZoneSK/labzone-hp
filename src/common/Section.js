import React from 'react'

import divider from './divider.svg'

import './Section.scss'
const Section = ({ title, children }) => {
  console.log(children)
  return (
    <section className='lab-section'>
      <h1 className='lab-section-title'>{title}</h1>
      <img src={divider} className='lab-section-divider' />
      <div className='lab-section-content'>{children}</div>
    </section>
  )
}

export default Section
