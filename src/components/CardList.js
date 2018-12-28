import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardArray = robots.map(robot => {
        return <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id} />
    });
    return (
        <div>
            {cardArray}
        </div>
    );
};

export default CardList;