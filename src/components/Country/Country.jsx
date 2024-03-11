import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, area, population, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountries);

    const passWithPrams = () =>handleVisitedCountries(country);
    

    return (
        <div className={`country ${visited && 'visited'}`}>

            <h2>Name : {name.common}</h2>
            <img src={flags.png} />
            <p>Area : {area} </p>
            <p>Population : {population} </p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithPrams}>Mark Visited</button> <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button><br />
            <button onClick={handleVisited}> {visited ? 'Visited : ' : 'Going : '} </button>
            {visited ? 'I have visited this country' : 'I want to visit'}


        </div>
    );
};

export default Country;