import { TypesPost, Posts } from './type'

const initialStatePost: Posts = {
  arrayPost: [],
  likes: 0
}

function reducerPost(state = initialStatePost, action: any) {
    switch(action.type) {
      case TypesPost.GET_POST:
        return {
          ... state,
          arrayPost: action.payload,
        }
      case 'GET_LIKES':
        return{
          likes: state.likes + 1
        }
      default: 
        return state
    }
}

export default reducerPost