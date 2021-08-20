import './App.scss'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import Form from './components/form/form'
import Events from './components/events/events'

const App = () => {
  const [data, setData] = useState()

  return (
    <div className="app">
      <Form setData={setData} />
      {data ? <Events events={data} /> : null}
    </div>
  )
}

export default App
