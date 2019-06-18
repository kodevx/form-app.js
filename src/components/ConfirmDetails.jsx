import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar  from "material-ui/AppBar";
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';


export default class ConfirmDetails extends Component {
    
    render() {
         const { values } = this.props;
         
         {console.log(this.props);}
        return (
            
                  <MuiThemeProvider>  
                    <React.Fragment>        
                       
                        <AppBar
                        position='static'
                        title='Confirmation Page'
                        color='secondary'
                       />
                       
                       <br/>
                       <h2> Hello {this.props.values.firstName}, </h2>
                       <List>
                            <ListItem primaryText="Name" secondaryText={values.firstName+values.middleName+values.lastName}/> 
                            <ListItem primaryText="Phone Number" secondaryText={values.phnNumber} />
                            <ListItem primaryText="City" secondaryText={values.city} />
                       </List>

                       <RaisedButton
                         primary = 'true'
                         label='Confirm'
                         onClick={this.props.nextStep}
                        />
                        <span className='m-4'/>
                        <RaisedButton
                         secondary = 'true'
                         label='Go Back'
                         onClick={this.props.prevStep}
                        />
                       
                       </React.Fragment>
                  </MuiThemeProvider>
            
        )
    }
}
