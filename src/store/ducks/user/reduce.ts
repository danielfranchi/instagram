import { User, TypesUser } from './type'

const initialStateUser: User = {
  name: '',
  username: '',
  userPicture: ''
}

function reducerUser(state = initialStateUser, action: any) {
    switch(action.type) {
      case TypesUser.GET_USER:
        return {
          name: action.payload.name,
          username: action.payload.username,
          userPicture: action.payload.userPicture,
        }
        
      default: 
        return state
    }
}

export default reducerUser