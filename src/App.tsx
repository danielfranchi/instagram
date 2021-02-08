import React from "react";

import Form from './Components/Form/Form'

import { Provider } from "react-redux";
import { store } from './store/store'

import User from './Components/User/User'
import Post from './Components/Post/Post'
import Header from './Components/Header/Header'
import Stories from './Components/Stories/Stories'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header />

      <div className="home">
          <div className="post-container">
            <Form />
            <Post />
          </div>

          <div>
            <User />
            <Stories />
          </div>
      </div>
    </Provider>
  );
}

export default App;