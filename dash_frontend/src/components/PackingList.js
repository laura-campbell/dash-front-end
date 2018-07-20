import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem, fetchPackingList, createListItem } from '../actions/tripActions';
import { Button, Segment, Checkbox } from 'semantic-ui-react';
import Items from './Items'


class PackingList extends React.Component {

  state = {
    trip_id: this.props.id,
    name: '',
    submitted: false,
  }

  componentDidMount() {
    this.props.fetchPackingList(this.props.id)
  }

  componentDidUpdate(prevProps) {
  if (this.props.listitem !== prevProps.listitem || this.props.deletedItem !== prevProps.deletedItem) {
    this.props.fetchPackingList(this.props.id);
  }

}

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
        })
      console.log(this.state)}

      onSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.createListItem({trip_id: this.state.trip_id, name: this.state.name});
      }

      deleteItem = (event, data) => {
        console.log(data.id);
        this.props.deleteItem(this.props.id, data.id);
      }


  render() {
    console.log(this.props)
    return (<div className="ui grid">
      {(!this.props.packinglist) ? null :
      (<div className="six wide column">
        <Segment color='olive'>
       {this.props.packinglist.map(item => {
         return (<div>
           <Button icon onClick={this.deleteItem} id={item.packing_list.id} label={item.packing_list.name} icon='check icon' >
             </Button>

         <br></br>
         </div>
       )
       })}</Segment>
     </div>)}

      <div className="three wide column">
      <div className= "ui form">
        <form onSubmit={this.onSubmit}>
        <div className="three fields">
      <label><h4>Item:</h4> <input onChange={this.handleChange} name="name" type="text" ></input></label>
          <label>  <br></br> <br></br>
          <button type="submit" className="ui tiny button">Add</button></label></div>
    </form>
  </div>
    </div>
    <Items id={this.props.id} length={this.props.length}/>
    </div>
      );
    }
  }


const mapStateToProps = state => ({
  packinglist: state.packinglist.packinglist,
  listitem: state.packinglist.listitem,
  deletedItem: state.packinglist.deleteditem
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({deleteItem: deleteItem, fetchPackingList: fetchPackingList, createListItem: createListItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingList);
