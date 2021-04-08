import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import './form.css';

import styled from 'styled-components'
;
const Title = styled.h1`

font-family: "Brush Script MT";
font-weight: 900;
font-size:350%;
 color: black;
padding:20px;

`;




  
export default class FormPrice extends Component {

    render() {
        return (
            <div className="center">
                           <Wobble  delay={500}>
     <Title>
     <h1>add new prices..</h1>
  
     </Title>

       </Wobble>
                
               
                <form className="form-wrapper">
           
               <div className="row"> 

              <input
            className="form-control"
            id="appdate"
            name="appDate"
            type="date"
           />  
</div>

         <div className="row">
          <input
            className="form-control"
            id="appTime"
            name="appTime"
            type="time"
            /> 
         </div>   
<div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            />  
</div>
        
   <div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 92"
            />   
   </div>
    

    <div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 95"
            />
    </div>
   
   <div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Diesel"
            />   
   </div>
   
            <button  className=" submitbtn" type="submit">ADD PRICE EVENT</button>

                </form>
         
            </div>
        )
    }
}
