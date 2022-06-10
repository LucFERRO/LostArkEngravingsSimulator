import React from 'react'

const Results = (results) => {

  return (
    <div class="line">
      <p class="results">Results</p>
      <input class="results,res-engraving1" placeholder={results.engraving1} disabled></input>
      <input class="results,res-engraving2" placeholder={results.engraving2} disabled></input>
      <input class="results,res-engraving3" placeholder={results.engraving3} disabled></input>
      <input class="results,res-engraving4" placeholder={results.engraving4} disabled></input>
      <input class="results,res-engraving5" placeholder={results.engraving5} disabled></input>
      <input class="results,res-engraving6" placeholder={results.engraving6} disabled></input>
      <input class="results,res-malus1" placeholder={results.malus1} disabled></input>
      <input class="results,res-malus2" placeholder={results.malus2} disabled></input>
      <input class="results,res-malus3" placeholder={results.malus3} disabled></input>
      <input class="results,res-malus4" placeholder={results.malus4} disabled></input>
    </div>
  )
}

export default Results