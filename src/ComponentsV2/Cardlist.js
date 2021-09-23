import React from 'react'
import Cardv2 from './Cardv2'
import './Cardlist.css'

function Cardlist({ datas }) {
    return (
        <div className={"CardList"}>
            {datas.map(item => {
                const { name, id, email } = item
                return (
                    <Cardv2 key={id} id={id} names={name} emails={email} />
                )
            }
            )
            }
        </div>
    )
}

export default Cardlist
