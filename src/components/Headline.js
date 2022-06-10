import React from 'react'

const Headline = (props) => {
  const engravings = ['ClassEngraving','Grudge','Cursed Doll','Adrenaline'];

  return (
    <div class="line">
      <p><button>GO</button></p>
      <select>
        <option value="" selected>Engraving 1</option>
        {engravings.map((engraving, index) => (
          <option key={index} value={engraving}>{engraving}</option>
        ))}
      </select>
      <select>
        <option value="" selected>Engraving 2</option>
        {engravings.map((engraving, index) => (
          <option key={index} value={engraving}>{engraving}</option>
        ))}
      </select>
      <select>
        <option value="" selected>Engraving 3</option>
        {engravings.map((engraving, index) => (
          <option key={index} value={engraving}>{engraving}</option>
        ))}
      </select>
      <select>
        <option value="" selected>Engraving 4</option>
        {engravings.map((engraving, index) => (
          <option key={index} value={engraving}>{engraving}</option>
        ))}
      </select>
      <select>
        <option value="" selected>Engraving 5</option>
        {engravings.map((engraving, index) => (
          <option key={index} value={engraving}>{engraving}</option>
        ))}
      </select>
      <select>
        <option value="" selected>Engraving 6</option>
        {engravings.map((engraving, index) => (
          <option key={index} value={engraving}>{engraving}</option>
        ))}
      </select>
      <p class="malus">-AtkPower</p>
      <p class="malus">-AtkSpeed</p>
      <p class="malus">-MoveSpeed</p>
      <p class="malus">-Defense</p>
    </div>
  )
}

export default Headline