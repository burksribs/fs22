import Country from "./Country"
import Weather from "./Weather"

const Countries = ({ filteredCountry, setFilteredCountry }) => {
    if (filteredCountry.length > 10)
        return <p>Too many matches, specify another filter</p>

    if (filteredCountry.length === 1)
        return (
            <div>
                <Country country={filteredCountry[0]} />
                <Weather country={filteredCountry[0]} />
            </div>
        )

    return (
        <div>
            {filteredCountry.map(c => <div key={c.cca2}>{(c.name.common)}
                <button onClick={() => setFilteredCountry([c])}>show</button></div>)}
        </div>
    )
}

export default Countries
