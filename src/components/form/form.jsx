import React, { useEffect } from 'react'
import moment from 'moment'
import { DatePicker, Input } from 'antd'
import ButtonsPanel from '../buttonsPanel/buttonsPanel'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import './form.scss'
import Errors from '../errors/errors'

const formatDate = 'DD-MM-YYYY'

const defaultEvent = {
  name: 'event',
}

const Form = ({ setData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'events',
  })

  useEffect(() => {
    if (!fields.length) append(defaultEvent)
  }, [])

  const addField = () => append(defaultEvent)

  const removeField = () => remove(fields.length - 1)

  const submitData = data => {
    const { startDate, events } = data
    // я бы не мутировал, а создавал новый массив через map. 
    // потому что технически ты все еще мутируешь аргументы функции, так как оно тут все по ссылке передается
    events.forEach(event => {
      event.duration = event.date.diff(startDate, 'days')
      if (event.duration < 1) {
        if (event.date.format(formatDate) !== startDate.format(formatDate)) event.duration = event.duration - 1
      }
      event.date = event.date.format(formatDate)
    })
    setData(events)
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

      {fields.map((field, index) => (
        <div style={{ marginBottom: '20px' }} key={field.id}>
          <div className="event">
            <label htmlFor="eventName">Название события: </label>
            <Controller
              name={`events[${index}].name`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} id="eventName" className="event__name" placeholder="Enter event name, please" size="big" type="text" />
              )}
            />

            <label htmlFor="eventDate">Дата события: </label>
            <Controller
              name={`events[${index}].date`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <DatePicker {...field} id="eventDate" format={formatDate} className="event__date" />}
            />
          </div>
          <Errors errors={errors.events} index={index} />
        </div>
      ))}
      <ButtonsPanel countEvent={fields.length} addField={addField} removeField={removeField} />
    </form>
  )
}

export default Form
