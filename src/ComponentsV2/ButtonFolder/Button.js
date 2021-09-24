import React from 'react'
import './Button.css'
function Button({ point, setScore }) {

    return (
        <button
            className={"button"}
            onClick={() => { setScore(point) }}>
            {point !== 0 ? `${point} Point` : `Reset`}

        </button >
    )
}

export default Button
