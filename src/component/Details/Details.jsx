import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsPage from './DetailsPage';

const Details = () => {
    const [card, setCard] = useState({});

    const {id} = useParams();
    console.log(id);

    const carded = useLoaderData();
        console.log(carded);
        
        useEffect(()=> {
            
           const findCard = carded?.find(card=>card.id == id);
           setCard(findCard);

        }, [id, carded]);
        

    return (
        <div className='flex   justify-center' >
          <DetailsPage card={card} ></DetailsPage>
           
        </div>
    );
};


export default Details;