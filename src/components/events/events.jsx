import React from 'react'
import Event from './event/event'
import './events.scss'

const Events = ({ events }) => {
  return (
    <div className="sended-events">
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  )
}

export default Events
