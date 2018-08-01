
const initialState = {
  packinglist: [],
  listitem: {},
  deleteditem: {}
}

const packingListReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_PACKING_LIST':
      return {
        ...state,
        packinglist: action.payload
      }
    case 'NEW_PACKING_LIST':
      return {
        ...state,
        listitem: action.payload
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        packinglist: state.packinglist.filter(item => item.packing_list.id !== action.payload.id),
        deleteditem: action.payload
      }
    default:
      return state;
  }
}

export default packingListReducer;
