import { TypesStories, Stories } from './type'

const initialStateStories: Stories = {
  arrayStories: []
}

function reducerStories(state = initialStateStories, action: any) {
    switch(action.type) {
      case TypesStories.GET_STORIES:
        return {
          arrayStories: action.payload,
        }
      default: 
        return state
    }
}

export default reducerStories