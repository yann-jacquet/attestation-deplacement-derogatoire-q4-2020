import React from 'react'
import PropTypes from 'prop-types'

// Pictos import
import { ReactComponent as Github } from '../../asset/pictos/github.svg'
import { ReactComponent as Love } from '../../asset/pictos/love.svg'
import { ReactComponent as User } from '../../asset/pictos/user.svg'
import { ReactComponent as Privacy } from '../../asset/pictos/privacy.svg'
import { ReactComponent as UserAdd } from '../../asset/pictos/user-add.svg'
import { ReactComponent as LogoGvt } from '../../asset/pictos/logo-gvt.svg'

const pictos = {
  github: <Github />,
  love: <Love />,
  user: <User />,
  userAdd: <UserAdd />,
  logoGvt: <LogoGvt />,
  privacy: <Privacy />,
}

const Picto = ({ icon, ...props }) => (
  React.cloneElement(
    pictos[icon],
    props,
  )
);

Picto.propTypes = {
  icon: PropTypes.oneOf(Object.keys(pictos)).isRequired,
}

export default Picto
