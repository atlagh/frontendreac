import React from 'react';

const Card = ({name, email, robot}) => {
    return (
        <div className="tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${name}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )

}

export default Card;