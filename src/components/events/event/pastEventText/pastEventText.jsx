import React from 'react'

const PastEventText = ({ duration, wordForDays }) => (
  <>
    <strong> {`Произошло ${duration === 0 ? ' / Произойдет' : ''}`}</strong>
    {duration === -1 || duration === 0 ? <span>{wordForDays} </span> : <span>{`${Math.abs(duration)} ${wordForDays} назад`}</span>}
  </>
)

export default PastEventText
