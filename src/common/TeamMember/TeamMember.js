import React from 'react'
import PropTypes from 'prop-types'

import './TeamMember.scss'

const TeamMember = props => {
  return (
    <div className='teammember'>
      <img src={'/media/' + props.image} alt={props.name + ' | ' + props.job} />
      <div className='title is-5 is-marginless'>{props.name}</div>
      <div className='teammember-role-name'>{props.job}</div>
      <div className='teammember-divider'>&nbsp;</div>
      <div className='m-social-icons'>
        
        {props.github && (
          <a href={'https://github.com/' + props.github}>
            <img
              className='m-social-icon'
              alt='GitHub Icon'
              src='media/social/github-logo.svg'
            />
          </a>
        )}

        {props.linkedin && (
          <a href={'https://www.linkedin.com/in/' + props.linkedin}>
            <img
              className='m-social-icon'
              alt='LinkedIn Icon'
              src='media/social/linkedin-logo.svg'
            />
          </a>
        )}
      </div>
    </div>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  image: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string
}

export default TeamMember
