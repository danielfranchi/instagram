import { TypesPost, Posts } from './type'

const initialStatePost: Posts = {
  arrayPost: [],
}

function reducerPost(state = initialStatePost, action: any) {
    switch(action.type) {
      case TypesPost.GET_POST:
        return {
          arrayPost: action.payload,
        }

      default: 
        return state
    }
}

export default reducerPost