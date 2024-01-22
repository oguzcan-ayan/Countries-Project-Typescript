import axios from 'axios';
import './App.css';
import { CountryType } from './data/types';
import { useEffect, useState } from 'react';

function App() {

  const [countries, setCountries] = useState<CountryType[]>([]);


  const getCountries = async() => {
    try {

      const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all"); 
      setCountries(data);
    }   
    
    catch(error) {
      console.error("Content not found.");
      // throw new Error("Content not found.");
      
    }
}

  useEffect(() => {
      getCountries();
  }, [])

  console.log(countries);


  return (
    <div>
        {countries.map((item, i) => {
          return(
            <div key={i}>
            <p>{item.name}</p>
          </div>
          )
         
        })}
    </div>
  )
}

export default App;

