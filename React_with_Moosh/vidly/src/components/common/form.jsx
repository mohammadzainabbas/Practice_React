import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = { data: {}, errors: {} };

  onFieldChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.onValidateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({
      data,
      errors
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({
      errors: errors || {}
    });
    if (errors) return;

    this.onSubmit();
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  onValidateProperty = ({ name, value }) => {
    const toBeValidated = { [name]: value };
    const propertySchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(toBeValidated, propertySchema);
    return error ? error.details[0].message : null;
  };

  renderFormButton = label => {
    return (
      <button
        style={{ cursor: this.validate() ? "not-allowed" : "pointer" }}
        disabled={this.validate()}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.onFieldChange}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.onFieldChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
