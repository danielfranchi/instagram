export enum TypesPost {
  GET_POST = 'GET_POST'
}

export interface PostItem {
  id: number
  user: string
  userPicture: string
  postPicture: string
  description: string
  likes: number
  location: string
}

export interface Posts {
  arrayPost: PostItem[]
}

export interface PostsState{
  posts: Posts
}

