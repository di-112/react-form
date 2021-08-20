import React from 'react'
import './errors.scss'

const Errors = ({ errors, index }) => {
  if (errors && errors[`${index}`])
    return (
      <>
        {errors[`${index}`].name && <div className="error">Ведите название события</div>}
        {errors[`${index}`].date && <div className="error">Ведите дату события</div>}
      </>
    )
  return null
}

export default Errors
