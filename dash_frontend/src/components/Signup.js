import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createUser } from '../actions';


class Signup extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;
    return (field.label === "Password") ? (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="password"
          {...field.input}
        />
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
    )
    : (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
    );
  }

  onSubmit = (values) => {
    const userValues = {user: {first_name: values.first_name, last_name: values.last_name, username: values.username, email: values.email, password: values.password}};
    console.log(userValues);
    console.log(this.props);
    this.props.createUser(userValues, this.props.history);
    console.log(this.props)
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>
        <h1 class="ui header">
          <i class="compass outline icon"></i>
          <div class="content">
            <img src='dash_simple.png' height='60px'></img>
          </div>
        </h1><br></br>
      <div class="ui teal ribbon label"><h2>Sign Up:</h2></div><br></br><br></br>
      <form class="ui form" onSubmit={  handleSubmit(this.onSubmit.bind(this)) } >
        <div class="two fields">
        <Field
          label="First Name"
          name="first_name"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="last_name"
          component={this.renderField}
        />
      </div>
      <div class="two fields">
        <Field
          label="Username"
          name="username"
          component={this.renderField}
        />
        <Field
          label="Email"
          name="email"
          component={this.renderField}
        />
      </div>
      <div class="two fields">
        <Field
          label="Password"
          name="password"
          type="password"
          component={this.renderField}
        />
      </div>
      <button type="submit" class="ui button">Submit</button>
      <Link to="/profile" className="btn btn-danger">Cancel</Link>
      </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "Enter a first name";
  }
  if (!values.last_name) {
    errors.last_name = "Enter a last name";
  }
  if (!values.username) {
    errors.username = "Enter a username";
  }
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = "Enter a password";
  }
  return errors;
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  trip: state.trips.active_trip});

export default reduxForm({
  validate,
  form: 'NewUserForm'
})(
  connect(mapStateToProps, { createUser })(Signup)
);
