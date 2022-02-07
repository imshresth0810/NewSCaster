import React from 'react'
import loader from './loader.gif'

const Spinner = () => {

  return (
    <div className="text-center">
      <img className="my-3" src={loader} alt="load" />
    </div>
  )

}

export default Spinner
