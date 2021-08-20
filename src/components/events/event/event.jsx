import React from 'react'
import './event.scss'
import FutureEventText from './futureEventText/futureEventText'
import PastEventText from './pastEventText/pastEventText'

const getWordForDiffDate = diffDate => {
  switch (diffDate) {
    case 0:
      return 'сегодня'

    case 1:
      return 'завтра'

    case -1:
      return 'вчера'

    case 2:
    case 3:
    case 4:
    case -2:
    case -3:
    case -4:
      return 'дня'

    default:
      return 'дней'
  }
}

const Event = ({ event: { name, duration } }) => {
  const wordForDays = getWordForDiffDate(duration)
  return (
    <div className="event">
      <strong>Событие </strong>
      <span>{name}</span>
      {duration > 0 ? (
        <FutureEventText duration={duration} wordForDays={wordForDays} />
      ) : (
        <PastEventText duration={duration} wordForDays={wordForDays} />
      )}
    </div>
  )
}

export default Event
