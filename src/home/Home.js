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
        <div className='columns'>
        <div className='column is-half'>
          First column
        </div>
        <div className='column is-half'>
          <p>
            <span className='title is-5'>LabZone s.r.o.</span><br/>
            Rovniankova 1658/2<br/>
            851 02 Bratislava
          </p>
          <p>
            IČO: 50 753 681 <br/>
            DIČ: 21 2046 1266
          </p>

          <p>
            +421 948 272 880 <br/>
            info&#64;labzone.sk
          </p>
        </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Home
