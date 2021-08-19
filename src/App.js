import './App.scss'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import Form from './components/form/form'
import Events from './components/events/events'

const App = () => {
  const [countEvent, setCountEvent] = useState(1)

  const [data, setData] = useState({})

  return (
    <div className="app">
      <Form setCountEvent={setCountEvent} setData={setData} countEvent={countEvent} />
      {Object.keys(data).length ? <Events events={data} /> : ''}
    </div>
  )
}

export default App
