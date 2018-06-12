import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions';

class FlightForm extends Component {

  state = {
    user_id: this.props.currentUser.id,
    name: '',
    origin: '',
    destination: '',
    outboundDepartureCity: '',
    outboundArrivalCity: '',
    outboundDepartureDate: '',
    outboundAirline: '',
    outboundDepartureTime: '',
    returnDepartureDate: '',
    returnDepartureTime: '',
    flightResults: []
  }

  handleFlightFetch = (event) => {
    event.preventDefault();
    const outDepArray = this.state.outboundDepartureDate.split('/');
    const retDepArray = this.state.returnDepartureDate.split('/');
    const outDepDate = outDepArray[1] + '/' + outDepArray[0] + '/' + outDepArray[2];
    const retDepDate = retDepArray[1] + '/' + retDepArray[0] + '/' + retDepArray[2];
    const minDepTime = (parseInt(this.state.outboundDepartureTime) - 1).toString() + ':00';
    const maxDepTime = (parseInt(this.state.outboundDepartureTime) + 1).toString() + ':00';
    const minReturnDepTime = (parseInt(this.state.returnDepartureTime) - 1).toString() + ':00';
    const maxReturnDepTime = (parseInt(this.state.returnDepartureTime) + 1).toString() + ':00';
    fetch(`https://api.skypicker.com/flights?flyFrom=${this.state.outboundDepartureCity}&to=${this.state.outboundArrivalCity}&dateFrom=${outDepDate}&dateTo=${outDepDate}&returnFrom=${retDepDate}&returnTo=${retDepDate}&partner=picky&curr=USD&locale=en&dtimefrom=${minDepTime}&dtimeto=${maxDepTime}&returndtimefrom=${minReturnDepTime}&returndtimeto=${maxReturnDepTime}`)
    .then(res => res.json())
    .then(json => {
        this.setState({ flightResults: json.data[0]})
    })
    }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div>
      <h3>Please enter some flight info</h3>
        <div>
          <h4>Outbound Flight</h4>
          <label>
          Departure City:
          <input type="text" name="outboundDepartureCity" onChange={this.onChange} />
          </label>
          <br></br>
          <label>
          Arrival City:
          <input type="text" name="outboundArrivalCity" onChange={this.onChange} />
          </label>
          <br></br>
          <label>
          Departure Date:
          <input type="text" name="outboundDepartureDate" onChange={this.onChange}/>
          </label>
          <br></br>
          <label>
          Airline:
            <select name="outboundAirline" onChange={this.onChange}>
              <option> -- </option>
              <option>Jet Blue</option>
              <option>Southwest</option>
              <option>Delta</option>
            </select>
          </label>
          <br></br>
          <label>
          Departure Time:
          <input type="time" name="outboundDepartureTime" onChange={this.onChange} />
          </label>
        </div>
        <div>
          <h4>Return Flight</h4>

          <label>
          Departure Date:
          <input type="text" name="returnDepartureDate" onChange={this.onChange}/>
          </label>
          <br></br>

          <br></br>
          <label>
          Departure Time:
          <input type="time" name="returnDepartureTime" onChange={this.onChange} />
          </label>

        </div>
        <input className="button" type="submit" value='Add Flights' />
      </form>
    </div>
    )
  }
}


const mapStateToProps = state => ({
  trip: state.trips.item,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(FlightForm);
