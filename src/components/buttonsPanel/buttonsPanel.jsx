import { Button } from 'antd'
import React from 'react'
import './buttonsPanel.scss'

const ButtonsPanel = ({ countEvent, incrementCount, decrementCount }) => {
  return (
    <div className="form-btns">
      <div className="set-count-btns">
        <Button className="add" onClick={incrementCount}>
          +
        </Button>
        <Button className="remove" danger disabled={countEvent > 1 ? false : true} onClick={decrementCount}>
          -
        </Button>
      </div>
      <Button className="submit-btn" htmlType="submit">
        Отправить
      </Button>
    </div>
  )
}

export default ButtonsPanel
