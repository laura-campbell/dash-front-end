import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createDay, createTrip } from '../actions/tripActions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import withAuth from '../hocs/withAuth';
import moment from 'moment';


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
    const tripValues = {user_id: this.props.currentUser.id, name: values.name, start_date: this.state.startDate.toLocaleString(), end_date: this.state.endDate.toLocaleString()};
    console.log(tripValues);
    console.log(this.props);
    this.props.createTrip(tripValues, this.props.history)}

  render() {
    console.log(this.props)
    const { handleSubmit } = this.props;

    return(
      <div>
        <div className="ui right floated left labeled button" tabindex="0">
        <label className="ui basic right pointing label">
          <i className="user icon"></i> {this.props.currentUser.username}
        </label>
        <div className="ui right floated button" onClick={e => {
            e.preventDefault();
            this.props.logoutUser();
          }}>
            Logout
            </div>
          </div>

      <div class ="ui teal ribbon label"><h2>New Trip:</h2></div><br></br><br></br>
      <form className="ui form" onSubmit={  handleSubmit(this.onSubmit.bind(this)) } >

        <Field
          label="Trip Name"
          name="name"
          component={this.renderField}
        />
      <div className="two fields">
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
      <button type="submit" className="ui button">Submit</button>
      <Link to="/trips" className="btn btn-danger">Cancel</Link>
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

  // export default withAuth(connect(mapStateToProps)(Profile));

export default withAuth(reduxForm({
  validate,
  form: 'NewTripForm'
})(
  connect(mapStateToProps, { createDay, createTrip })(TripForm))
);
