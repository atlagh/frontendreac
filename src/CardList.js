import React from 'react';
import Card from './Card';


const CardList = ({friends}) => {
    const cardComponent = friends.map((user, i) => {
        return (
            <Card
                key={i}
                name={friends[i].name}
                email={friends[i].email}
                robot={friends[i].robot}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );


}
export default CardList;