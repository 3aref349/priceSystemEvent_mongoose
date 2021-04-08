import React, { Component } from 'react'
import Reportone from  '../Reports/ReportOne'
import ReportTwo from  '../Reports/ReportTwo'
import styled from 'styled-components'
 import Fade from'react-reveal/Fade';
import './test2.css'
const SecttionWrapper = styled.section`
display:flex;
flex-direction: row;
width:100%;

`;
const itemWrapper =styled.div`
width:50%;
`;
const Title = styled.h1`


  font-size: 2.5em;
  text-align: center;
  color:black;
  font-family: 'Oswald', sans-serif;
`;
export default class Dashboard extends Component {
  render() {
    return (
   

  <section className="Dwrapper">
    
      
   
  <div className="Drow">
  <Fade  delay={600}>
     <Title>
     <h1>Report One </h1>
     </Title>
       </Fade>
       <Reportone />
  </div>
  <div className="Dseprate">
    
  </div>
  <div className="Drow">
  <Fade  delay={600}>
     <Title>
     <h1>Report Two </h1>
     </Title>
       </Fade>
       <ReportTwo />
  </div>
  </section>
      
  
       
 
    

 


     


      
  
      
     
    )
  }
}

