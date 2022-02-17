import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Alert } from "react-bootstrap";

import { useBetween } from "use-between";
import Fetch from "./Sharedstate";
const CardItem = () =>{
    let weatherPhrase;
    let temperature;
    let countryID;
    let weatherIcon;
    let errorMsg;
    const{forecast,city,error} = useBetween(Fetch)
  
    if(Object.keys(forecast).length != 0){
         weatherPhrase = (forecast.DailyForecasts[0]['Day'].IconPhrase).toUpperCase();
         weatherIcon = `imgs/icons/${forecast.DailyForecasts[0]['Day'].Icon}.svg`;
         
         //converting to celisus from faranheit
        temperature = Math.round((forecast.DailyForecasts[0].Temperature.Minimum.Value)-32*(5/9));
    }
    if(city.length !=0){
        countryID = city.Country.ID;

        
    }
    if(error.length!=0){
        errorMsg = error;
    }


 
return (<>


{
         errorMsg && Object.keys(forecast).length != 0 ?
<Alert 
variant="danger"
style={{marginLeft: '13%', width: '50%'}}>
<h4>Oops!! it seems the city you have entered doesn't exist  </h4>
</Alert>
         :
         Object.keys(forecast).length >0 &&    
<section className='cards'>
    <div className="container">

<Card  style={{ width: '18rem', height: '24rem' }}>
    
    <Card.Body>
    <h3  class="position-relative">
    
          {city.EnglishName}
          <span style={{ fontSize:'10px',marginLeft: '2%'}} class="badge rounded-pill position-relative top-0 start-0 translate-middle-y bg-warning">
              {countryID}
          </span>
        </h3>
    
        <Card.Text>
    
        <span style={{fontSize: '82px' }}>
            {temperature}
        </span>
        <span style= {{fontSize: '39px',marginBottom:'830px'}}>&deg;C</span>
        <span style={{ display: "block", width: 100, padding: 0 }}>
    
        <Image
        src={weatherIcon}
        alt="Weather Icon"
    
        rounded
      />
      </span>
      <h5 style={{marginLeft: '12px'}}>
      {weatherPhrase}
          </h5>
        </Card.Text>
    </Card.Body>
    
    </Card>
     
    
    </div>
    </section> 
              
  }
 

  </>)

}
export default CardItem