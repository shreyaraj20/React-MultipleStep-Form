import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem, ListItemText } from "@material-ui/core/";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <div className="confirmdetails container-fluid">
        <MuiThemeProvider>
          <React.Fragment>
            <h1>Confirm User Data</h1>
            <List>
              <ListItem className="">
                <ListItemText primary="First Name" secondary={firstName} />
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>

              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            <br />

            <button onClick={this.back} className="b1">
              Back
            </button>
            <br />
            <button onClick={this.continue}>Confirm</button>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Confirm;
