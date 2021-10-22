import PropTypes from 'prop-types'
import Button from './Button'
import {stateEnum} from '../App'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({title, onButtonClick, showChart}) => {
  const [showMenu, setShowMenu] = useState(false)
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <div className={ showMenu ? '' : 'header-container-mb'}> */}
            <div className={showMenu ? 'btn-container visible' : 'btn-container'}>
              <Button 
                  text='Show All' 
                  onClick={() => onButtonClick(stateEnum.all)} />
              <Button 
                text='Show Bar'
                onClick={() => onButtonClick(stateEnum.bar)}
              />
              <Button 
                text='Show Line'
                onClick={() => onButtonClick(stateEnum.line)}
              />
            </div>
            <Button 
                text='Sources'
                onClick={() => onButtonClick(stateEnum.sources)}
              />
              <FontAwesomeIcon className='icon'
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
              />
            {/* </div> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Population Data'
}

Header.prototypes = {
    title: PropTypes.string.isRequired,
}

export default Header
