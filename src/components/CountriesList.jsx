import { Link } from 'react-router-dom';

function CountriesList(props) {

    const { countries } = props;

    return (
        <div id="countries-list" className="list-group">
        {countries.map((country) => {

     return <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag"/>
    <p>{country.name.name}</p></Link> 
    })
    }
        </div> 
)
}

export default CountriesList;