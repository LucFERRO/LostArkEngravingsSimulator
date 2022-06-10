import React from 'react'

const Line = (props) => {
  return (
    <div class="line">
      <p>{props.name}</p>
      <input onBlur={props.updateTable} class="input-engraving1" type="number"></input>
      <input onBlur={props.updateTable} class="input-engraving2" type="number"></input>
      <input onBlur={props.updateTable} class="input-engraving3" type="number"></input>
      <input onBlur={props.updateTable} class="input-engraving4" type="number"></input>
      <input onBlur={props.updateTable} class="input-engraving5" type="number"></input>
      <input onBlur={props.updateTable} class="input-engraving6" type="number"></input>
      <input onBlur={props.updateTable} class="input-malus1" type="number"></input>
      <input onBlur={props.updateTable} class="input-malus2" type="number"></input>
      <input onBlur={props.updateTable} class="input-malus3" type="number"></input>
      <input onBlur={props.updateTable} class="input-malus4" type="number"></input>
    </div>
  )
}

export default Line