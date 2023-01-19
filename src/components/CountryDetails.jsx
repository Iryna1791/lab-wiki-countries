import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {

    const { id } = useParams();
    const [ country, setCountry ] = useState(null);

    useEffect(() => {
        if ( id ) {
            axios.get(`https://ih-countries-api.herokuapp.com/countries/${ id }`)
                .then(response => setCountry(response.data));
        }
    }, [id]);

    return (
<>
{ !id && <p>No country selected.</p>}
    { country && 
        <div class="container">
                    
        <div class="contry-name"><h2>{ country.name.name }</h2></div>

                    
        <div class="contry-capital">Capital<ul>{ country.capital[0] }</ul></div>

        <div class="contry-area">Area<ul>{ country.area }</ul></div>
        
        <div class="contry-border">Border<ul>{ country.borders.map(border => <li key={ border }>{ border }</li>)}</ul></div>
                        
            
        </div>
    }
</>
)
}

export default CountryDetails;