import React from 'react'
import PropTypes from 'prop-types'

// Utils
// import cn from '../../utils/classNames'

// Style
import style from './Radio.module.css'

const Radio = React.forwardRef(({ label, name, id, value }, ref) => {
  return (
    <label className={style.container} htmlFor={id}>
      {label}
      <input ref={ref} type="radio" name={name} id={id} value={value}/>
      <div className={style.radio} />
    </label>
  )
})

Radio.propTypes = {

}

export default Radio
