import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({id,img}) => {
    return ( 
        <div className="card">
            <div className="card__imgWrapper">
                <img src={img} alt=""/>
            </div>
            <Link as="a" to={`/` + id}>Go to card</Link>
        </div>
     );
}
 
export default Card;