import React from 'react'

const Card = ({children}) => {
  return (
    <div className='shadow-lg bg-white  transition duration-600 hover:scale-105 mt-5'>{children}</div>
  )
}

export default Card