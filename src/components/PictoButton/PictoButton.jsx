import React from 'react'
import PropTypes from 'prop-types'

// Components
import Picto from '../Picto'

// Utils & misc
import cn from '../../utils/classNames'

// Style
import style from './PictoButton.module.css'

const PictoButton = ({ label, picto, isActive, onClick }) => {
  return (
    <button onClick={onClick} className={cn([style.btn, isActive && style.active])} type="button">
      <span className={style.pictoContainer}>
        <Picto className={style.picto} icon={picto} />
      </span>
      {label}
    </button>
  )
}

PictoButton.propTypes = {

}

export default PictoButton
