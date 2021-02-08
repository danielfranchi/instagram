import { action } from 'typesafe-actions'
import { User, TypesUser } from './type'

export const getUser = (payload: User) => action(TypesUser.GET_USER, payload)