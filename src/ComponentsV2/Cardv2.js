import React from 'react'
import Button from './ButtonFolder/Button'
import './Cardv2.css'
function Cardv2({ id, emails, names }) {
    const [score, setScore] = React.useState(0)
    const resetScore = (point) => {
        setScore(point)
    }
    const addScore = (point) => {
        setScore(point + score)
    }
    return (
        <div id={id} className={"card-container"}>
            <div className={"CardImage"}>
                <img src={`https://robohash.org/${id}?set=set2`} alt={'RoboHash'} />
            </div>
            <div className={"CardContent"}>
                <p>{names}</p>
                <p>{emails}</p>
            </div>
            <div className={"score-container"}>
                <div className={"button-container"}>
                    <Button point={0} setScore={resetScore} score={score} />
                    <Button point={1} setScore={addScore} score={score} />
                    <Button point={2} setScore={addScore} score={score} />
                    <Button point={3} setScore={addScore} score={score} />
                </div>
                <div className={"score"}>Score:{score}</div>
            </div>
        </div>
    )
}

export default Cardv2
