import React from 'react'
import {useEffect,useState} from 'react'

const Sharedstate = () =>{
const key = "maypAypfodbKQGN4rsu8gqDdtQPzVeju";
const baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/search";
const[cityDefault,setCityDefault] = useState('');
const query = `?apikey=${key}&q=${cityDefault}`;
const baseUrlCity = "https://dataservice.accuweather.com/forecasts/v1/daily/1day/";
const [forecast,setForecast] = useState({});
const [city,setCity] = useState([]);
const [error,setError] = useState(false)

    
    useEffect(()=>{
            
        const fetchData = async () =>{
           try{
            const response = await fetch(baseUrl + query);
            const data = await response.json();
            //fetching city details 
            
            const city_id =data[0]['Key'];
            setCity(data[0]);
            //
            //fetching weather forecast for a particular city
            const queryCity = `${city_id}?apikey=${key}`;
            const response_forecast = await fetch(baseUrlCity + queryCity);
            const data_forecast = await response_forecast.json();
            setForecast(data_forecast);
            setError(false)
           }catch(err){
               setError(true)
           }


        }
        fetchData();
    },[cityDefault])
    return {forecast,setForecast,city,setCity,setCityDefault,error}
   


}
export default Sharedstate;