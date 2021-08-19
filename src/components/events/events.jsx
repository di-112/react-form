import React from 'react'
import './events.scss'

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
  let wordForDays

  switch (event.diffDate) {
    case 1: {
      wordForDays = 'день'
      break
    }
    case 2:
    case 3:
    case 4: {
      wordForDays = 'дня'
      break
    }

    default:
      wordForDays = 'дней'
      break
  }

  return (
    <div className="event">
      <strong>Событие </strong>
      <span>{event.event}</span>

      {event.diffDate > 0 ? (
        <>
          {' '}
          <strong>Произойдет через </strong>
          <span>
            {event.diffDate} {wordForDays}
          </span>{' '}
        </>
      ) : (
        <>
          {' '}
          <strong>Произошло </strong>
          <span>
            {Math.abs(event.diffDate)} {wordForDays} назад
          </span>{' '}
        </>
      )}
    </div>
  )
}

export default Events
