import React from 'react'
import './events.scss'

// вот эту историю можно сделать без switch case и через проверку остатка от деления
// не то, чтобы есть какие-то проблемы с твоим вариантом, просто говорю про еще один вариант
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

// лучше все-таки два компонента в одном файле не хранить :-)
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
              {/* тут лучше через шаблонную строку делать */}
              {/* и, возможно, сделать тернарник перед span. так будет почище */}
                через {event.diffDate} {wordForDays} 
              </>
            ) : (
              <>{wordForDays} </>
            )}
          </span>
        </>
      ) : (
        <>
        {/* ну и тут лучше шаблонную строку */}
          <strong> Произошло {event.diffDate === 0 ? <>/ Произойдет </> : ''}</strong>
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
