import React from 'react'
import './event.scss'
import FutureEventText from './futureEventText/futureEventText'
import PastEventText from './pastEventText/pastEventText'

const getWordForDiffDate = diffDate => {
  if (diffDate === 0) return 'сегодня'
  else if (diffDate === 1) return 'завтра'
  else if (diffDate === -1) return 'вчера'
  else if (diffDate > 10 && diffDate < 15) return 'дней'
  else {
    switch (Math.abs(diffDate) % 10) {
      case 1:
        return 'день'
      case 2:
      case 3:
      case 4:
        return 'дня'
      default:
        return 'дней'
    }
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
