import React from 'react'

export const SingleExperience = ({experience}) => {
  return (
    <div>
      <p>{experience.job} </p>
      <p>{experience.company} </p>
      <p>{experience.date}</p>
      <ul></ul>
    </div>
  )
}
