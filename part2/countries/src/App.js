import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import Countries from "./components/Countries"

//.toLowerCase().includes(search)

const App = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, []);

  const filterCountry = (event) => {
    const search = event.target.value;
    setCountry(search)
    setFilteredCountry(countries
      .filter(country =>
        country.name.common.toLowerCase().includes(search))
      || country.name.official.toLowerCase().includes(search))
  }

  return (
    <div>
      <Filter value={country} onChange={filterCountry} />
      <Countries filteredCountry={filteredCountry} setFilteredCountry={setFilteredCountry} />
    </div>
  );
}

export default App;
