import React from "react";
import {Button} from 'react-bootstrap';
import { useBetween } from "use-between";
import Fetch from "./Sharedstate";
const Buttons = ({searchValue}) =>{
const{setCityDefault} = useBetween(Fetch);

const searchHandler = (event) =>{
    setCityDefault(searchValue);
}

return<>
<Button 
style={{background:'',border:'1px solid #4e008e'}}
onClick={searchHandler}

>
    Show Weather Info

</Button>
</>
}
export default Buttons