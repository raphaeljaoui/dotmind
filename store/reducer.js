import * as Types from './types'
const initialState = {
    favoris: [
      //  {
      //     avatar: "https://reqres.in/img/faces/1-image.jpg",
      //     email: "george.bluth@reqres.in",
      //     first_name: "George",
      //     id: 1,
      //     last_name: "Bluth",
      //   }
      ],
}

const reducer = (state = initialState, action) => {
  let nextState
  switch(action.type){
      case Types.ADD_FAVORIS :
        const favorisIndex = state.favoris.findIndex(item => item.id === action.payload.favoris.id)
        console.log(favorisIndex);
        if (favorisIndex !== -1) {
          nextState = {
            ...state,
            favorisIndex: state.favoris.filter((item, index) => index !== favorisIndex)
          }
        }
        else {
          nextState = {
            ...state,
            favoris: [...state.favoris, action.payload]
          }
        }
        return state || nextState
        default: return state
    }
}

export {reducer}