import React from 'react'
import PropTypes from 'prop-types'

// Utils
import cn from '../../utils/classNames'

const Input = React.forwardRef(({ label, className, ...props }, ref) => {
  return (
    <label htmlFor={props.name} className={cn([className])}>
      { label }
      <input ref={ref} {...props} />
    </label>
  )
})

Input.propTypes = {

}

export default Input
