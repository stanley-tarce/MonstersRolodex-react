import React from 'react'
import '../Components/Card.css';
// import Button from '../Components/Button';
import Score from '../Components/Score';




function Card() {
     const nameFormatter = (name) => {
        return `${name.firstName} ${name.lastName}`
    }
    const name = {
        firstName: 'Kobe',
        lastName: 'Bryant', 
        team: 'Los Angeles Lakers',
        position: 'Small Forward',
        image: require('../assets/Kobe_Bryant_Washington.png').default //default is required to show the picture
    };

    return (
        <div className="card-container">
            <h1 className="card-name">{nameFormatter(name)}</h1>
            <p className="card-team">Team: {name.team}</p>
            <p className="card-position">Position: {name.position}</p>
            <img src={name.image} alt={nameFormatter(name)}></img>
            {/* <div className="button-handler">
                <Button name={"2 Pts"} point={2}></Button>
                <Button name={"3 Pts"} point={3}></Button>
            </div> */}
            <Score className={"score-container"}/>
            
        </div>
    )
}



export default Card
