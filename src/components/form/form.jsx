import React from 'react'
import moment from 'moment'
import { DatePicker, Input } from 'antd'
import ButtonsPanel from '../buttonsPanel/buttonsPanel'
import { Controller, useForm } from 'react-hook-form'
import './form.scss'

const formatDate = 'DD-MM-YYYY'

const Form = ({ setCountEvent, setData, countEvent }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    unregister,
  } = useForm({
    mode: 'onBlur',
  })

  // вместо вот этой вот интересной истории, можно было бы использовать массив
  // а еще лучше специальный метод из библиотки, который позволяет создавать массив полей
  // называется useFieldArray
  const incrementCount = () => setCountEvent(prevCount => prevCount + 1)

  const decrementCount = () => {
    unregister(`${countEvent - 1}`)
    setCountEvent(prevCount => prevCount - 1)
  }

  const submitData = data => {
    // чтобы избежать удаления ключей, можно сделать вот так
    // const { startDate, ...rest } = data;
    // и в rest останется все, что тебе дальше нужно
    const startDate = data.startDate

    delete data.startDate

    // вообще, изменение пропов считается плохой практикой
    // лучше создавать новый объект (хотя бы поверхностную копию)
    // а еще лучше было бы собрать это не в объект, чтобы не бегать по ключам, а массив
    // в целом старайся коллекции одинаковых элементов делать массивами
    Object.keys(data).forEach(key => {
      data[key].diffDate = data[key].eventDate.diff(startDate, 'days')
      if (data[key].diffDate < 1) {
        if (data[key].eventDate.format(formatDate) !== startDate.format(formatDate)) data[key].diffDate = data[key].diffDate - 1
      }

      data[key].eventDate = data[key].eventDate.format(formatDate)
    })

    setData(data)
  }

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <label htmlFor="currDate">Дата отсчета:</label>
      <Controller
        control={control}
        defaultValue={moment()}
        name="startDate"
        render={({ field }) => <DatePicker {...field} id="currDate" format={formatDate} className="current-date" />}
      />
      {/* вот такие штуки лучше создавать заранее в переменной, а тут уже по ней бежать */}
      {/* код будет почище */}
      {new Array(countEvent).fill('').map((_, index) => (
        <div style={{ marginBottom: '20px' }} key={index}>
          <div className="event">
            <label htmlFor="eventName">Название события: </label>
            <Controller
              name={`${index}.event`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} id="eventName" className="event__name" placeholder="Enter event name, please" size="big" type="text" />
              )}
            />

            <label htmlFor="eventDate">Дата события: </label>
            <Controller
              name={`${index}.eventDate`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <DatePicker {...field} id="eventDate" format={formatDate} className="event__date" />}
            />
          </div>
          {errors[`${index}`] ? errors[`${index}`].event && <div className="error">Ведите название события</div> : ''}
          {errors[`${index}`] ? errors[`${index}`].eventDate && <div className="error">Ведите дату события</div> : ''}
        </div>
      ))}
      <ButtonsPanel countEvent={countEvent} incrementCount={incrementCount} decrementCount={decrementCount} />
    </form>
  )
}

export default Form
