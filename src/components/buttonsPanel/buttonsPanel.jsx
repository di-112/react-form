import { Button } from 'antd'
import React from 'react'
import './buttonsPanel.scss'

const ButtonsPanel = ({ countEvent, addField, removeField }) => {
  return (
    <div className="form-btns">
      <div className="set-count-btns">
        <Button className="add" onClick={addField}>
          +
        </Button>
        <Button className="remove" danger disabled={countEvent > 1 ? false : true} onClick={removeField}>
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
