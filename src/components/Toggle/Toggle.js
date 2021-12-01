import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/Context';
import "./Toggle.css"

const Toggle = () => {

    const theme = useContext(ThemeContext)
    const hanldeClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className='t'>
            <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Sun-256.png" alt="" className="t-icon" />
            <img src="https://cdn1.iconfinder.com/data/icons/lightly-selected/30/night-240.png" alt="" className="t-icon" />
            <div className="t-button" onClick={hanldeClick} style={{ left: theme.state.darkMode ? 0 : 35 }}></div>
        </div >
    );
};

export default Toggle;