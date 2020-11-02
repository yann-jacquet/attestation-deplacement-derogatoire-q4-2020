import React from 'react'
import PropTypes from 'prop-types'

// Utils
import cn from '../../utils/classNames'

// Style
import style from './Input.module.css'

const Input = React.forwardRef(({ label, className, ...props }, ref) => {
  return (
    <div className={cn([className])}>
      <input className={cn([style.input])} ref={ref} {...props} />
    </div>
  )
})

Input.propTypes = {

}

export default Input
