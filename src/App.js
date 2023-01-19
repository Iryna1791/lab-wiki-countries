import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";

function App() {
  
    const [ countries, setCountries ] = useState(null);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => setCountries(response.data));

    }, []);

    return (
      <div className="App">
        <Navbar />
        <h2>All Countries List</h2>
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route path="/:id" element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    );
}
export default App;