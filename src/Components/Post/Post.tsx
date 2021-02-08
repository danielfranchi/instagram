import React from 'react'
import { FiHeart } from "react-icons/fi";
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux'
import { getPost } from  '../../store/ducks/post/action'
import { PostItem, PostsState} from '../../store/ducks/post/type'

const Post = () => {

  const [id, setId] = React.useState<any>(null)

  const dispatch = useDispatch()

  const posts = useSelector((state: PostsState) => state.posts.arrayPost)
  const likes = useSelector((state: PostsState) => state.posts.likes)


  React.useEffect(() => {
    axios.get('http://localhost:4000/posts')
    .then(resposta => dispatch(getPost(resposta.data)))
  }, [])

  
  const like = (like: any) => {
    setId(like)
    dispatch({ type: 'GET_LIKES'})

    const requisicao = {
      likes: likes
    }
    axios.patch(`http://localhost:4000/posts/${id}`, requisicao)


  }
 
  return (
      <>
        {posts.map((item: PostItem) =>(
          <div className="post" key={item.id}>
            <header>
              <img src={item.userPicture} alt="user" />
              <div className="post-user">
                <strong>{item.user}</strong>
                <span>{item.location}</span>
              </div>
            </header>

            <div className="post-image">
              <img src={item.postPicture} alt="post" />
            </div>

            <div className="post-likes" onClick={() => like(item.id)}>
              <FiHeart /> {item.likes}
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </>
  )
}

export default Post
