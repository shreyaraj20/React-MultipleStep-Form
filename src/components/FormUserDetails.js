import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="userdetails container-fluid">
        <MuiThemeProvider>
          <Fragment>
            <h1>Enter User Details</h1>
            <TextField
              hintText=" First Name"
              floatingLabelText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              fullWidth="true"
            />
            <br />
            <TextField
              hintText=" Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              fullWidth="true"
            />
            <br />
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              fullWidth="true"
            />
            <br />
            <button onClick={this.continue}>Continue</button>
          </Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormUserDetails;
