import React, { useContext } from 'react'
import "./toggle.css"
import dark from "../../img/dark.png"
import light from "../../img/light.png"
import { ThemeContext } from '../../Context'

function Toggle() {

    const theme = useContext(ThemeContext)

    const moveIt = () => {
        theme.dispatch({type: "Toggle"})
    }
    
  return (
    <div className='tog'>
        <img src={light} alt="" className="tog-icon" />
        <img src={dark} alt="" className="tog-icon" />
        <div className="tog-button" onClick={moveIt} style={{left: theme.state.darkMode ? 0 : 27}}></div>

    </div>
  )
}

export default Toggle