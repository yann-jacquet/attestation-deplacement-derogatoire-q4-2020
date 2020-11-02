import PropTypes from 'prop-types'

// Utils
import cn from '../../utils/classNames'

// Style
import style from './Button.module.css'

const Button = ({ children, color, ...props }) => {
  return (
    <button className={cn([style.btn, style[color]])} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {

}

export default Button
