import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './stepform.css'
const WrapperSection = styled.section`

display:flex;
justify-content:center;

width:100%;
margin-top:50px;
align-items: center; 




`;
const Wrapperdiv = styled.div`

display:flex;
justify-content:center;
flex-direction: column;
background-color:#f2f7f4;




`;
const Button = styled.button`


justify-content:center;

color:black;
width:100%;
border:none



`;
const Title = styled.h5`

line-height: 2.5;


font-weight: bold;
font-size:100%;
color:black;
width:100%;


`;

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      appdate:  '',
      apptime: '',
      Gasoline80: '', 
      Gasoline92: '', 
      Gasoline95: '', 
      Diesel: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { appdate, apptime, Gasoline80,Gasoline92,Gasoline95,Diesel } = this.state
    alert(`Your Data  Saved: \n 
       
           `
           )
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1? 2: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <2){
    return (
      <button 
        className="btn btn-primary next" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>

      

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
     
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <WrapperSection>
    <div className="form-group">
 

<Fade  delay={500}>
     <Title>
     <h2> Pick App Date & Time  </h2>
  
     </Title>

       </Fade>

        <Wrapperdiv>
 
<input
      className="form-control"
      id="appdate"
      name="appDate"
      type="date"
     /> 

<input
      className="form-control"
      id="appTime"
      name="appTime"
      type="time"
      /> 
        </Wrapperdiv>
        
    </div>
    </WrapperSection>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <WrapperSection>
    <div className="form-group">
  

<Fade  delay={500}>
     <Title>
     <h2>Please Enter new Prices</h2>
  
     </Title>

       </Fade>
        <Wrapperdiv>
        <input
            className="form-control"
            id="Gasoline80"
            name="Gasoline80"
            type="integer"
            readonly
            /> 
           
            <input
            className="form-control"
            id="Gasoline92"
            name="Gasoline92"
            type="integer"
            readonly
            />  
             <input
            className="form-control"
            id="Gasoline95"
            name="Gasoline95"
            type="integer"
            readonly
            />
            <input
            className="form-control"
            id="diesel"
            name="diesel"
            type="integer"
            readonly
            />  

     
                
        </Wrapperdiv>
        <Button>
        <button className="btn  center acceptbtn ">Submit</button> 
        </Button>
      
        
        
                 
    </div>
    </WrapperSection> 
  );
}


export default MasterForm

