import React from 'react'
import './Button.css'

function DisplayScore() {
    const [score, setScore] = React.useState(0)
    return {setScore,
        render: (
            <div className={"scoreContainer"}>
                <h1>Score:{score}</h1>
            </div>
        )
    }
}

export default DisplayScore
