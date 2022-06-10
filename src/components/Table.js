import React from 'react'
import { useEffect } from 'react';
import Line from './Line'
import Headline from './Headline'
import Results from './Results'

const Table = () => {

  let engraving1 = document.querySelectorAll('input-engraving1');
  let engraving2 = document.querySelectorAll('input-engraving2');
  let engraving3 = document.querySelectorAll('input-engraving3');
  let engraving4 = document.querySelectorAll('input-engraving4');
  let engraving5 = document.querySelectorAll('input-engraving5');
  let engraving6 = document.querySelectorAll('input-engraving6');

  let resultEngraving1 = 0
  let resultEngraving2 = 0
  let resultEngraving3 = 0
  let resultEngraving4 = 0
  let resultEngraving5 = 0
  let resultEngraving6 = 0
  
  function doTheMath(array) {
    //Sums up all the numbers of a column
    let sum = 0

    for ( let i=0 ; i<array.length ; i++ ) {
      sum+=Number(array[i].value)
    }
    return sum
  }

  function updateTable() {
    let engraving1 = document.querySelectorAll('input.input-engraving1');
    let engraving2 = document.querySelectorAll('input.input-engraving2');
    let engraving3 = document.querySelectorAll('input.input-engraving3');
    let engraving4 = document.querySelectorAll('input.input-engraving4');
    let engraving5 = document.querySelectorAll('input.input-engraving5');
    let engraving6 = document.querySelectorAll('input.input-engraving6');

    resultEngraving1 = doTheMath(engraving1)
    resultEngraving2 = doTheMath(engraving2)
    resultEngraving3 = doTheMath(engraving3)
    resultEngraving4 = doTheMath(engraving4)
    resultEngraving5 = doTheMath(engraving5)
    resultEngraving6 = doTheMath(engraving6)
  }

  useEffect(() => {
    resultEngraving1 = doTheMath(engraving1)
    resultEngraving2 = doTheMath(engraving2)
    resultEngraving3 = doTheMath(engraving3)
    resultEngraving4 = doTheMath(engraving4)
    resultEngraving5 = doTheMath(engraving5)
    resultEngraving6 = doTheMath(engraving6)
  });

  return (
    <div id="table">
      <Headline/>
      <Line updateTable={updateTable} name="Books" />
      <Line updateTable={updateTable} name="Stone" />
      <Line updateTable={updateTable} name="Necklace" />
      <Line updateTable={updateTable} name="Earring1" />
      <Line updateTable={updateTable} name="Earring2" /> 
      <Line updateTable={updateTable} name="Ring1" /> 
      <Line updateTable={updateTable} name="Ring2" /> 
      <Results 
        engraving1={resultEngraving1}
        engraving2={resultEngraving2}
        engraving3={resultEngraving3}
        engraving4={resultEngraving4}
        engraving5={resultEngraving5}
        engraving6={resultEngraving6}
        malus1="5"
        malus2="5"
        malus3="5"
        malus4="5"
      /> 
    </div>
  )
}

export default Table