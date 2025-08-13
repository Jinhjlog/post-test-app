export interface PostProps {
  id: string
  title: string
  body: string
  tags: string[]
  reactions: { likes: number; dislikes: number }
  views: number
  userId: number
}

export class Post {
  constructor(props: PostProps) {
    Object.assign(this, props)
  }
}
