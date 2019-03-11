import React from 'react'
import PropTypes from 'prop-types'

import LinkButton from '../LinkButton'

import './ProjectTeaser.scss'

const ProjectTeaser = props => {

  return (
    <div className='project-teaser'>
      <div className='columns'>
          <div className='column is-half'>
            <h2 className='title is-2'>{props.name}</h2>
            <p>
              {props.content}
            </p>
            <LinkButton label={props.buttonLabel}/>
          </div>
          <div className='project-teaser-image column is-half has-text-centered is-vertical-center'>
            <img src={props.projectImage} alt={props.projectImageAlt} />
          </div>
        </div>
        <div className='content-spacer has-text-centered'>
          <hr />
        </div>
    </div>
  )
}


ProjectTeaser.propTypes = {
  buttonLabel: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  projectImage: PropTypes.string,
  projectImageAlt: PropTypes.string,
}

export default ProjectTeaser