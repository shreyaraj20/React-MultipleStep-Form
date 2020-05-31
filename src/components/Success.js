import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName }
    } = this.props;
    return (
      <div className="success container-fluid">
        <MuiThemeProvider>
          <React.Fragment>
            <h2>Thank You {firstName} For Your Submission</h2>
            <p className="para">
              You will get an email with further instructions
            </p>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;
