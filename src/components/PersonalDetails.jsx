import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar  from "material-ui/AppBar";
import TextField from "material-ui/TextField";  
import RaisedButton from 'material-ui/RaisedButton';


export default class PersonalDetails extends Component {
    
    render() {
        const { values,handleChange } = this.props;
       // console.log(values);
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>   
                        
                        <AppBar 
                          postion='static' 
                          color='primary'
                          text=''
                          title='Personal Details'
                        />
                        
                        <br/>
                        <h2>Hello {values.firstName},</h2>

                          <h6>                         {/*badges with Textfield*/}
                          <span className="badge badge-primary m-4">3</span> 
                          <TextField
                          floatingLabelText='Middle Name'
                          hintText='Enter your Middle Name'
                          onChange={handleChange('middleName')}  
                          defaultValue={values.middleName}   
                          /> 
                          </h6>
                          
                          
                          <h6>
                          <span className="badge badge-primary m-4">4</span> 
                          <TextField
                          floatingLabelText='Last Name'
                          hintText='Enter your Last Name'
                          onChange={handleChange('lastName')}   
                          defaultValue={values.lastName}
                          />
                          </h6>
                            
                          
                          <h6>
                          <span className="badge badge-primary m-4">5</span>
                          <TextField
                          floatingLabelText='City'
                          hintText='Enter your City'
                          onChange={handleChange('city')}   
                          defaultValue={values.city}
                          /> 
                          </h6>
                          
                          <br/>
                         <span className='m-5' >
                          <RaisedButton 
                            //class='btn btn-primary m-5'
                            label='Continue'
                            primary='true'
                            
                            //className={"classes.button"}
                            onClick={this.props.nextStep}/>   
                        </span>
                          
                          <RaisedButton 
                            label='Back'
                            secondary='true'
                            onClick={this.props.prevStep}/>
                     
                    </React.Fragment>  
               </MuiThemeProvider>
            </div>
        )
    }
}
