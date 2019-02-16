import React from 'react'

import Section from '../common/Section'
import TeamMember from '../common/TeamMember'

const Home = () => {
  return (
    <React.Fragment>
      <Section title='Služby'>
        <p>ščťžýáíéúôä</p>
      </Section>

      <Section title='Projekty'>
        <p>Hello</p>
      </Section>

      <Section title='Team'>
        <div className='columns'>
          <div className='column is-one-third has-text-centered'>
            <TeamMember
              name='Martin Starosta'
              job='product manager, co-founder'
              image='martin-starosta.png'
              linkedin='martinstarosta'
              github='martin-starosta'
            />
          </div>
          <div className='column is-one-third has-text-centered'>
            <TeamMember
              name='Vladislav Šaling'
              job='team leader, co-founder'
              image='vladislav-saling.png'
              linkedin='vladislav-saling-9bb54a26'
              github='vlad-saling'
            />
          </div>
          <div className='column is-one-third has-text-centered'>
            <TeamMember
              name='Adrián Kollárik'
              job='developer'
              image='ado-kollarik.png'
              linkedin='adriankollarik'
              github='ado-kollarik'
            />
          </div>
        </div>
      </Section>

      <Section title='Kontakt'>
        <p>Hello</p>
      </Section>
    </React.Fragment>
  )
}

export default Home
