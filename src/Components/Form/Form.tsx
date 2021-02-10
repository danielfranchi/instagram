import React, { useRef } from 'react'
import '../../App.css'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'
import { newPost } from '../../store/ducks/post/action'

const Form  = () => {

  const dispatch = useDispatch()
  const { userPicture } = useSelector((state: any) => state.user)

  const inputUrl = useRef<HTMLInputElement>(null)
  const input = useRef<HTMLInputElement>(null)
  
  const postNovo = () => {
    const requisicao = {
      postPicture: inputUrl.current?.value,
      description: input.current?.value,
      userPicture: userPicture,
      likes: 0
    }
    axios.post("http://localhost:4000/posts", requisicao)
      .then(resposta => dispatch(newPost(resposta.data)))
  }

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputUrl} />
        <input type="text" placeholder="Digite uma descrição" ref={input} />
        <button onClick={postNovo}>Postar!</button>
      </div>
  );
}

export default Form;