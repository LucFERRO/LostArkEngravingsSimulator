import React from 'react'

const Headline = (props) => {
  const engravings = ['ClassEngraving','Grudge','Cursed Doll','Adrenaline']
  return (
    <div class="line">
      <p></p>
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
      <p class="debuff">-AtkPower</p>
      <p class="debuff">-AtkSpeed</p>
      <p class="debuff">-MoveSpeed</p>
      <p class="debuff">-Defense</p>
    </div>
  )
}

export default Headline