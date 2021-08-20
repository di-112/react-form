import React from 'react'

const FutureEventText = ({ duration, wordForDays }) => (
  <>
    <strong> Произойдет </strong>
    {duration > 1 ? <span>{`через ${duration} ${wordForDays}`}</span> : <span>{wordForDays}</span>}
  </>
)

export default FutureEventText
