import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';

export default class Success extends Component{
   render(){
        
        return(
        
            <MuiThemeProvider> 
                <React.Fragment>
                        
                        <AppBar
                         title='Successful Submission'
                         position='static'
                         color='secondary'
                         />
                         <br/>
                         
                         <h2>Hello {this.props.name},</h2>
                         <br/>
                         
                         <h4>Your Form has been submitted successfully!</h4>
                         <br/>
                         
                        <RaisedButton
                        secondary='true'
                        label='Back' 
                        onClick={this.props.prevStep}  
                        />
                
                </React.Fragment>
            </MuiThemeProvider>
            
        )
    }
}