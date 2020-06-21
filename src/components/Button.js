import React from 'react';
import { Link } from "react-router-dom";

const Button = ({children, to}) => {
    return ( 
        <Link className="button" as="a" to={to}>
            {children}
        </Link>
     );
}
 
export default Button;