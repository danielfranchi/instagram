import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerUser from './ducks/user/reduce'
import reducerStories from './ducks/stories/reduce'
import reducerPost from './ducks/post/reduce'

const createRootReducer = () => combineReducers({
  user: reducerUser,
  stories: reducerStories,
  posts: reducerPost

})

const store = createStore(createRootReducer(), composeWithDevTools())
export { store }

