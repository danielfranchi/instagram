import { action } from 'typesafe-actions'
import { TypesStories, Stories } from './type'

export const getStories = (payload: Stories) => action(TypesStories.GET_STORIES, payload)