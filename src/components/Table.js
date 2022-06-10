import React from 'react'
import Line from './Line'
import Headline from './Headline'
import Results from './Results'

const Table = () => {
  return (
    <div id="table">
      <Headline/>
      <Line name="Books" />
      <Line name="Stone" />
      <Line name="Necklace" />
      <Line name="Earring1" />
      <Line name="Earring2" /> 
      <Line name="Ring1" /> 
      <Line name="Ring2" /> 
      <Results /> 
    </div>
  )
}

export default Table