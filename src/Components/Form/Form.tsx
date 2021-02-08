import React, { useRef } from 'react';
import '../../App.css';
import axios from 'axios'
import { useSelector} from 'react-redux'


const Form  = () => {

  const like = 0
  const { userPicture } = useSelector((state: any) => state.user)

  const inputUrl = useRef<HTMLInputElement>(null)
  const input = useRef<HTMLInputElement>(null)
  
  const postNovo = () => {
    const requisicao = {
      postPicture: inputUrl.current?.value,
      description: input.current?.value,
      userPicture: userPicture,
      likes: like
    }
    axios.post("http://localhost:4000/posts", requisicao)
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