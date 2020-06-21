import React from 'react'

const ReadMore = ({data}) => {
    console.log(data)
    return ( 
        <ul>
            {Object.keys(data).map((key,i) => {
                const info = data[key].map(item => item);
                return (
                <li key={i}><span>{key}:</span><span>{info}</span></li>
                )
            }
            )}
        </ul>
     );
}
 
export default ReadMore;