import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/siervos">Siervos de la Palabra</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Programa Misioneros Voluntarios de la Brecha</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Brecha mes a mes</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu