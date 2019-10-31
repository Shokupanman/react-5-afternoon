import React, { Component } from "react";
import { Link } from "react-router-dom";
import connect from "react-redux";

function mapStateToProps(state) {
  return {
    loanType: state.loantype,
    propertyType: state.propertyType,
    city: state.city,
    propToBeUsedOn: state.propToBeUsedOn,
    found: state.found,
    realEstateAgent: state.realEstateAgent,
    cost: state.cost,
    downPayment: state.downPayment,
    credit: state.credit,
    history: state.history,
    addressOne: state.addressOne,
    addressTwo: state.addressTwo,
    addressThree: state.addressThree,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email
  };
}

export default connect(mapStateToProps)(WizardEleven);
