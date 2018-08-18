import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPackingList, createListItem } from '../actions/tripActions';
import { Button } from 'semantic-ui-react'


class Items extends React.Component {

  state= {
    packinglist: [
          `Outfits for ${this.props.length} days`,
          'Shoes',
          'Underwear',
          'Socks',
          'Pajamas',
          'Swimwear',
          'Workout gear',
          'Sneakers',
          'Sunglasses',
          'Bags',
          'Belts',
          'Hats',
          'Comb/Brush',
          'Deodorant',
          'Shampoo/Conditioner',
          'Hairstyling products',
          'Soap/Face wash',
          'Hand sanitizer',
          'Toothbrush/Toothpaste/Floss',
          'Makeup',
          'Razors',
          'Shaving cream',
          'Lotion',
          'Glasses/Contact lens supplies',
          'Personal hygiene supplies',
          'Sunscreen',
          'Nail clippers',
          'Medication',
          'Coat',
          'Electronics',
          'Chargers',
          'Entertainment'
    ]
  }


  componentDidMount() {
    this.props.fetchPackingList(this.props.id)
  }

  onChange = (event, data) => {
    let arr = this.state.packinglist.filter(item => item !== data.label);
    this.setState ({
      packinglist: arr
    });
    this.props.createListItem({trip_id: this.props.id, name: data.label})
        }


  render() {
    return (
      <div className="six wide column">
          Common Items:
       {this.state.packinglist.map(item => {
         return (<div key={item}>
           <Button onClick={this.onChange} label={item} icon='plus' >
             </Button>
         <br></br>
         </div>
       )
       })}
     </div>
      );
    }
  }


const mapStateToProps = state => ({
  packinglist: state.packinglist.packinglist,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPackingList: fetchPackingList, createListItem: createListItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
