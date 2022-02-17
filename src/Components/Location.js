import React from "react";
import { Image } from "react-bootstrap";
import { useState} from "react";
let geoPosition;
const Location = () =>{
const[geoCity,setgeoCity] = useState('');

const key = "maypAypfodbKQGN4rsu8gqDdtQPzVeju";
const baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search";

navigator.geolocation.getCurrentPosition(async(position)=> {
            try{
             geoPosition = `${position.coords.latitude},${position.coords.longitude}`
             const queryCity = `?apikey=${key}&q=${geoPosition}`;
             //console.log(geoPosition);
             const response = await fetch(baseUrl + queryCity);
             const data = await response.json();
             setgeoCity(data['EnglishName']);
            }catch(err){
                console.log(err);
            }
            
    });
    
     
return <div  style={{marginLeft:'0%'}}>
  <span style={{color:'white'}}>
  <Image
  src={'imgs/location/loc.png'}
  style = {{width:'20px'}}
  alt="none">

  </Image>
 {geoCity}
</span>

</div>

}

export default Location;