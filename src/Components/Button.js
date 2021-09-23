import React from 'react'
import propTypes from 'prop-types'
import './Button.css'
import scoreContainer from '../Components/displayScore'

function Button({setScore, point,name}) {

        
    
    return (
        <button className={"buttons"} onClick={() => setScore(scoreContainer += point)} point={point}>{name}</button>

    )
}


Button.propTypes={
    name: propTypes.string.isRequired,
    point: propTypes.number
};
export default Button
