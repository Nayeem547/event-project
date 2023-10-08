import React from 'react';
import CardRow from './CardRow';

const Cardmap = ({carded}) => {
    console.log(carded);
    return (
        <div className=' grid grid-cols-3 gap-4 ' >
            {
                carded.map(card=> <CardRow key={card.id} card={card} ></CardRow> )

            }
        </div>
    );
};

export default Cardmap;