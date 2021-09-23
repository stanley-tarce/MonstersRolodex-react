import React from 'react'
import propTypes from 'prop-types'
import './Button.css'
import './Score.css'
// import Button from './Button'

let scoreContainer = 0
function Score() {
    
    const [score, setScore] = React.useState(0)
    return (
        <div className={"score"}>
            <div className={"score-container"}>
                <h1>Score: {score}</h1> 
            </div>
            
            <div>
                <Button setScore={setScore} name={'Reset'} point={0}/>
                <Button setScore={setScore} name={'1 Pts'} point={1}/>
                <Button setScore={setScore} name={'2 Pts'} point={2}/>
                <Button setScore={setScore} name={'3 Pts'} point={3}/>
            </div>

            
        </div>
    )
}

function Button({setScore,name,point}) {
    
    return (
        <button onClick={() => {
            if (name === "Reset")
                {
                
                setScore(scoreContainer = 0)
                }
            else
                {
                setScore(scoreContainer+=point)
                }
            }
        }>
        {name}
        </button>
    );
}

Button.propTypes = {
    name: propTypes.string.isRequired,
    score: propTypes.number.isRequired
}

export default Score
