import React from 'react'

import Section from '../common/Section'
import ProjectTeaser from '../common/ProjectTeaser'
import TeamMember from '../common/TeamMember'

const Home = () => {
  return (
    <React.Fragment>
      <Section title='Služby'>
        <ul className='twoColList'>
          <li>vývoj webových a mobilných aplikácií</li>
          <li>tvorba webu a e-commerce stránok</li>
          <li>optimalizácia prvkov SEO</li>
          <li>dizajn UX</li>
          <li>fotografia</li>
          <li className='active'>reklamné a marketingové služby</li>
          <li>event management</li>
          <li>školenia a workshopy</li>
        </ul>
      </Section>

      <div className='columns services-info'>
        <div className='column is-half is-paddingless'>
          <img
            className='services-info-image'
            src='/media/marketing.jpg'
            alt='Marketing a reklama'
          />
        </div>
        <div className='column is-half services-description'>
          <h2 className='title is-3'>Marketing a reklama</h2>
          <p className='services-descrioption-content'>
            Prinášame výnimočné strategické a marketingové riešenia, ktoré vám
            dovolia posunúť váš biznis na úplne iný level.
          </p>
          <div>
            <br />
            Chevrons
          </div>
        </div>
      </div>

      <Section title='Projekty'>
        <ProjectTeaser
          name='E-shop pre majolikamodra.sk'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              arcu libero, condimentum ut rhoncus iaculis, scelerisque non
              metus. Cras eu molestie ligula. Aliquam nisi purus, elementum eu
              nibh nec, maximus volutpat velit. Maecenas leo leo, congue at
              facilisis vel, porta in est. Proin ante quam, pellentesque a
              sapien ut, feugiat aliquet sem. Curabitur sed tellus sed elit
              rutrum sagittis. Ut vehicula dapibus ex, sed pulvinar massa
              facilisis a. Pellentesque vestibulum ex urna, ut hendrerit dolor
              pharetra id. Vestibulum blandit orci consequat accumsan sodales'
          buttonLabel='Prečítať si o projekte'
          buttonLink='#'
          projectImage='/media/logo-SLM.png'
          projectImageAlt='Logo SLM'
        />

        <ProjectTeaser
          name='Marketing support pre ASBIS SK'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              arcu libero, condimentum ut rhoncus iaculis, scelerisque non
              metus. Cras eu molestie ligula. Aliquam nisi purus, elementum eu
              nibh nec, maximus volutpat velit. Maecenas leo leo, congue at
              facilisis vel, porta in est. Proin ante quam, pellentesque a
              sapien ut, feugiat aliquet sem. Curabitur sed tellus sed elit
              rutrum sagittis. Ut vehicula dapibus ex, sed pulvinar massa
              facilisis a. Pellentesque vestibulum ex urna, ut hendrerit dolor
              pharetra id. Vestibulum blandit orci consequat accumsan sodales'
          buttonLabel='Prečítať si o projekte'
          buttonLink='#'
          projectImage='/media/logo-asbis.svg'
          projectImageAlt='Logo SLM'
        />
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
          <div className='column is-half'>First column</div>
          <div className='column is-half'>
            <p>
              <span className='title is-5'>LabZone s.r.o.</span>
              <br />
              Rovniankova 1658/2
              <br />
              851 02 Bratislava
            </p>
            <p>
              IČO: 50 753 681 <br />
              DIČ: 21 2046 1266
            </p>

            <p>
              +421 948 272 880 <br />
              info&#64;labzone.sk
            </p>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Home
