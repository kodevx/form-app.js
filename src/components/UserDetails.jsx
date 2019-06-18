
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar  from "material-ui/AppBar";
import TextField from "material-ui/TextField";  
import RaisedButton from 'material-ui/RaisedButton';



export default class UserDetails extends Component {
    
    render() {
        //console.log(this.props);
        const { values,handleChange } = this.props;
        return (
          
            <div>
               <MuiThemeProvider>
                 <React.Fragment>   
                      
                        <AppBar 
                          postion='static' 
                          color='primary'
                          text=''
                          title='User Details'
                        />
                        
                          <h6>                         {/*badges with Textfield*/}
                          <span className="badge badge-primary m-4">1</span> 
                          <TextField
                          floatingLabelText='First Name'
                          hintText='Enter your First Name'
                          onChange={handleChange('firstName')}  
                          defaultValue={values.firstName}   
                          /> 
                          </h6>
                          
                          <h6>
                          <span className="badge badge-primary m-4">2</span>
                          <TextField
                          floatingLabelText=' Phone Number'
                          hintText='Enter your Phone Number'
                          onChange={handleChange('phnNumber')}   
                          defaultValue={values.phnNumber}
                          /> 
                          </h6>
                          
                          <br/>
                          
                          <RaisedButton 
                            //class='btn btn-primary m-5'
                            label='Continue'
                            primary='true'
                            //className={"classes.button"}
                            onClick={this.props.nextStep}/>   
                       </React.Fragment>  
                    </MuiThemeProvider>
              </div>
            
        )
    }
}
