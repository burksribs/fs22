const Country = ({ country }) =>
    <div>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h2>languages:</h2>
        <ul>
            {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} alt="Country flag"></img>
    </div>

export default Country

