import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions';
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';


class TripForm extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;
    return (
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
    const tripValues = {user_id: this.props.currentUser.id, name: values.name, start_date: values.start_date, end_date: values.end_date};
    console.log(tripValues);
    console.log(this.props);
    this.props.createTrip(tripValues, this.props.history);
    console.log(this.props)
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>

      <form onSubmit={  handleSubmit(this.onSubmit.bind(this)) } >

        <Field
          label="Trip Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="Start Date"
          name="start_date"
          component={this.renderField}
        />
        <Field
          label="End Date"
          name="end_date"
          component={this.renderField}
        />
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/profile" className="btn btn-danger">Cancel</Link>
      </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter a name";
  }
  if (!values.start_date) {
    errors.start_date = "Enter a start date";
  }
  if (!values.end_date) {
    errors.end_date = "Enter an end date";
  }
  return errors;
}

//         <div>
//           <h1>Add Trip</h1>
//           <form onSubmit={this.onSubmit}>
//             <div>
//               <label>Title: </label>
//               <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
//             </div>
//             <div>
//               <label>Origin: </label>
//               <input type="text" name="origin" onChange={this.onChange} value={this.state.origin}/>
//               <label>Destination: </label>
//               <input type="text" name="destination" onChange={this.onChange} value={this.state.destination}/>
//             </div>
//             <input className="button" type="submit" value='Add Trip' />
//         </form>
//       </div>
//     )
//   }
// }
//
// TripForm.propTypes = {
//   createTrip: PropTypes.func.isRequired
// }
//
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  trip: state.trips.active_trip});

export default reduxForm({
  validate,
  form: 'NewTripForm'
})(
  connect(mapStateToProps, { createTrip })(TripForm)
);
