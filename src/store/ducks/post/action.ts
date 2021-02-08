import { action } from 'typesafe-actions'
import { TypesPost, Posts } from './type'

export const getPost = (payload: Posts) => action(TypesPost.GET_POST, payload)
