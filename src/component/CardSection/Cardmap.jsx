import React from 'react';
import CardRow from './CardRow';

const Cardmap = ({carded}) => {
    console.log(carded);
    return (
        <div className=' mx-auto itemes-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 ' >
            {
                carded.map(card=> <CardRow key={card.id} card={card} ></CardRow> )

            }
        </div>
    );
};

export default Cardmap;