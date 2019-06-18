import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import ConfirmDetails from './ConfirmDetails'
import Success from './Success'

export default class UserForm extends Component {
    
    state = {
         step:1,
         firstName: '',
         middleName: '',
         lastName:'',
         phnNumber:'',
         city:'',
         
    }
   

    //Proceeds to NextStep
   nextStep = () =>{
     const { step } = this.state;
     this.setState({
         step: step + 1
     });   
   }
   
   //Goes back to Previous Step
   prevStep = () =>{
     const { step } = this.state;
     this.setState({
         step: step - 1
     });
   }

   //Set the Userfield change
   TxtFieldChange = input => e =>{
    this.setState({
        [input]: e.target.value
     }); 
     //console.log("Field Change...");    
   }
      

   render(){
           
      const { step } = this.state;
      const { firstName, middleName, lastName, phnNumber, city} =this.state; 
      const values =  { firstName, middleName, lastName, phnNumber, city};
      //console.log(values);
      switch(step){

          case 1: return(
                   <UserDetails
                    values={values}              
                    handleChange={this.TxtFieldChange} 
                    nextStep={this.nextStep}
                   />);
          
          case 2: return(<PersonalDetails
                    values={values}
                    handleChange={this.TxtFieldChange}          
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />);

          case 3: return(<ConfirmDetails
                          nextStep={this.nextStep}
                          prevStep={this.prevStep}
                          values={values}                           
                    />);
          
          case 4: return(<Success
                         prevStep = {this.prevStep}
                         name = {values.firstName}   
                    />);
             
                        
          default: ;
    }
  }
}
