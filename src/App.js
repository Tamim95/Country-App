import './App.css'

//now do fetch
import React,{useState,useEffect} from 'react';
import Countries from './Components/Countries';
import Search from './Components/Search';

//need url for Data fetching
const url ="https://restcountries.com/v3.1/all";

function App() {
  
  //is it working loading
const [isLoading,setIsLoading]=useState(true);
const [error, setError]=useState(null);
const [countries, setCountries]= useState([]);
const [filteredCountries, setFilteredCountries]=useState(countries);

//fetching method start
const fetchData=async (url) => {
  setIsLoading(true);
  
  //if there any error so that we can get error message so use try catch
  try{
      //task of fetching start
const response= await fetch(url);

//now this data converting in JSON format
const data = await response.json();

//when i will get data then I am setting data in setCountries
setCountries(data);

setFilteredCountries(data);

//now will tell setLoading(false) because Load has completed
setIsLoading(false);

//if we get properly then we can not get error so
setError(null);

//we will check is it working so we see in console
// console.log(countries) // data has countries state

  } catch(error){
    //if get error then this will come change so (false)
    setIsLoading(false);
    setError(error);
  }


}


useEffect(()=>{
  fetchData(url);
},[]);

const handleRemoveCountry = (name) => {
  const filter = filteredCountries.filter(
    (country) => country.name.common !== name
  );
  setFilteredCountries(filter);
};

const handleSearch=(searchValue)=>{
 let value= searchValue.toLowerCase();
 const newCountries= countries.filter((country)=>{
  const countryName=country.name.common.toLowerCase();
  return countryName.startsWith(value)
 });
 setFilteredCountries(newCountries)

};

  return (
    //now i am displaying the datas. we will use fragment
<> 
<h1>Country App</h1>
<Search onSearch={handleSearch}/>

{/* if is loading then provide a message */}
{isLoading && <h2>Loading...</h2>}

{/* if is there any error then see */}
{error && <h2>{error.message}</h2>}

{/*will pass data to here*/}
{countries && <Countries 
countries={filteredCountries}
onRemoveCountry={handleRemoveCountry}/>}

</>
  );
}

export default App;
