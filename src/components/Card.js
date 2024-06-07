import React, { useState } from 'react'

const Card = ({ avatar, name, title, despretion, rate }) => {
    const [state, setState] = useState(0) 
    return(
        <div className='card'>
                <img src={avatar} />
                    {name}
                <div>
                    <h3>{title}</h3>
                    <p>
                        {despretion}
                    </p>
                    <h1>
                        {rate}
                    </h1>
                </div>
                <div>count = {state}</div>
                <span onClick={() => setState(state + 1)}>+</span>
                <span onClick={() => setState(state - 1)}>-</span>
                <button>add to card</button>
        </div>                        
    )
}


export default Card