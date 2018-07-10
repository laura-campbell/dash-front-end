import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPackingList, createListItem } from '../actions/tripActions';

class PackingList extends React.Component {

  state = {
    trip_id: this.props.id,
    name: ''
  }

  componentDidMount() {
    this.props.fetchPackingList(this.props.id)
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
        })
      console.log(this.state)}

      onSubmit = () => {
        console.log(this.state);
        this.props.createListItem({trip_id: this.state.trip_id, name: this.state.name}, this.props.history)
      }

  render() {
    console.log(this.props)
    return (<div>
      {(!this.props.packinglist) ? null :
      (<div className="ui cards">
       {this.props.packinglist.map(item => {
         return (
         <div className="card">
         <div className="content">
          <h3 className="ui top attached centered header">{item.packing_list.name}</h3>
          <div className="ui attached segment">
            <table className="ui celled table">
               <tbody>
               </tbody>
             </table>
          </div>
       </div>
     </div>
       )
       })}
     </div>)}

      <div className="six wide column">
      <div className= "ui form">
        <form onSubmit={this.onSubmit}>
        <div className="three fields">
      <label><h4>Item:</h4> <input onChange={this.handleChange} name="name" type="text" ></input></label>
          <label>  <br></br> <br></br>
          <button type="submit" className="ui tiny button">Add</button></label></div>
    </form>
  </div>
    </div>
    </div>
      );
    }
  }


const mapStateToProps = state => ({
  packinglist: state.trips.packinglist,
  currentUser: state.auth.currentUser,
  active_trip: state.trips.active_trip
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPackingList: fetchPackingList, createListItem: createListItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingList);
