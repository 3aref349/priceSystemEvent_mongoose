import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import './form.css';
const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: black;
padding-top:50px;

`;




  
export default class ConfirmPrice extends Component {

    render() {
        return (
            <div className="center">
               <Fade  delay={500}>
     <Title>
     <h1>If You Agree Just Confirm ..</h1>
  
     </Title>

       </Fade>
            
                <form className="form-wrapper">
        
<div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            readonly
            />  
</div>
        
   <div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 92"
            readonly
            />   
   </div>
    

    <div className="row">
       <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 95"
           
            readonly/>
    </div>
   
   <div className="row">
       <input readonly
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Diesel"
             />   
   </div>
<div>
<input type="checkbox" id="confirmed" name="confirmed" value="confirmed" />
  <label for="confirmed">Confirmed</label>
</div>
  
            <button  className=" submitbtn" type="submit">SUBMIT</button>

                </form>
         
            </div>
        )
    }
}
