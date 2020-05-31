import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="personaldetails container-fluid ">
        <h1>Enter Personal Details</h1>
        <MuiThemeProvider>
          <React.Fragment>
            <TextField
              hintText=" Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              hintText=" City"
              floatingLabelText="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              hintText="  Bio"
              floatingLabelText="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
              margin="normal"
              fullWidth="true"
            />
            <br />

            <button onClick={this.back} className="b1">
              Back
            </button>
            <br />
            <button onClick={this.continue}>Continue</button>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormPersonalDetails;
