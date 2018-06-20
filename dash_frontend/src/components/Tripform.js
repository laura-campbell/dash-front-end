import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions';
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class TripForm extends Component {

  state={
    startDate: '',
    endDate: ''
  }

  handleStartDateChange = (date) => {
   this.setState({
     startDate: date
   });
 }

 handleEndDateChange = (date) => {
  this.setState({
    endDate: date
  });
}

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
    console.log(values)
    const tripValues = {user_id: this.props.currentUser.id, name: values.name, start_date: this.state.startDate.toLocaleString(), end_date: this.state.endDate.toLocaleString()};
    console.log(tripValues);
    console.log(this.props);
    this.props.createTrip(tripValues, this.props.history);
    console.log(this.props)
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>
        <div class="ui right floated left labeled button" tabindex="0">
        <label class="ui basic right pointing label">
          <i class="user icon"></i> {this.props.currentUser.username}
        </label>
        <div class="ui right floated button" onClick={e => {
            e.preventDefault();
            this.props.logoutUser();
          }}>
            Logout
            </div>
          </div>

      <div class ="ui teal ribbon label"><h2>New Trip:</h2></div><br></br><br></br>
      <form class="ui form" onSubmit={  handleSubmit(this.onSubmit.bind(this)) } >

        <Field
          label="Trip Name"
          name="name"
          component={this.renderField}
        />
      <div class="two fields">
        <DatePicker
          label="Start Date"
          name="start_date"
          selected={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          label="End Date"
          name="end_date"
          selected={this.state.endDate}
          onChange={this.handleEndDateChange}
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
