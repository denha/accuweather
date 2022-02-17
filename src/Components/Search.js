import React, { useState } from "react";
import {Form} from 'react-bootstrap';
import Fetch from "./Sharedstate";
import Buttons from "./Button";
import { useBetween } from "use-between";
import Location from "./Location";
import Image from "react-bootstrap/Image";


const Search = () =>{
const{setCityDefault} = useBetween(Fetch);
const seachBar={
    borderRadius: '0px',
}
const[search,setSearch] = useState('')

const searchHandler = (event)=>{
setSearch(event.target.value)

}

const searchFormHandler = (event)=>{
event.preventDefault();
setCityDefault(search)

}

return (<div className="search">
  <Location></Location>
<form className="row g-3" id="searchForm" onSubmit={searchFormHandler}>
  <div className="col-md-9">
    <Form.Control 
    className={`${seachBar}`} 
    value={search} 
    onChange={searchHandler} 
    placeholder="Enter the name of the City" 
    type="text" 
    style ={{color:'black'}}
    />

  </div>
  <div className="col-md-3">
      <Buttons searchValue={search}></Buttons>
  </div>
  </form>

</div>)


}
export default Search