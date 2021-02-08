import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux'
import {getStories} from  '../../store/ducks/stories/action'
import {StoriesItem, StoriesState} from '../../store/ducks/stories/type'

function Stories() {

  const dispatch = useDispatch()

  const stories = useSelector((state: StoriesState) => state.stories.arrayStories)


  React.useEffect(() => {
    axios.get('http://localhost:4000/stories')
    .then(resposta => dispatch(getStories(resposta.data)))
  }, [])

  return (
   
    <div className="stories">
      <h2>Stories</h2>

      {stories.map((item: StoriesItem) => (
        <div className="storie" key={item.id}>
          <div className="storie-image">
            <img src={item.userPicture} alt="user" />
          </div>

          <div className="storie-user">
            <strong>{item.user}</strong>
            <span>{item.time}</span>
          </div>
      </div>
      ))
    }
      
      

    </div>
  )
}

export default Stories
