export interface PostApiData {
  id: string
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

export interface PostApiResponse {
  posts: PostApiData[]
  total: number
  skip: number
  limit: number
}
