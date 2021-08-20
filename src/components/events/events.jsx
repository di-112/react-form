import React from 'react'
import './events.scss'

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

const Events = ({ events }) => {
  return (
    <div className="sended-events">
      {Object.keys(events).map(key => (
        <Event key={key} event={events[key]} />
      ))}
    </div>
  )
}

const Event = ({ event }) => {
  let wordForDays = getWordForDiffDate(event.diffDate)

  return (
    <div className="event">
      <strong>Событие </strong>
      <span>{event.event}</span>

      {event.diffDate > 0 ? (
        <>
          <strong> Произойдет </strong>
          <span>
            {event.diffDate > 1 ? (
              <>
                через {event.diffDate} {wordForDays}
              </>
            ) : (
              <>{wordForDays} </>
            )}
          </span>
        </>
      ) : (
        <>
          <strong> Произошло {event.diffDate === 0 ? <>/Произойдет </> : ''}</strong>
          <span>
            {event.diffDate === -1 || event.diffDate === 0 ? (
              <>{wordForDays} </>
            ) : (
              <>
                {Math.abs(event.diffDate)} {wordForDays} назад
              </>
            )}
          </span>
        </>
      )}
    </div>
  )
}

export default Events
