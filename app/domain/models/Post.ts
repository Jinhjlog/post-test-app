export interface PostProps {
  _id: string
  _title: string
  _body: string
  _tags: string[]
  _reactions: { _likes: number; _dislikes: number }
  _views: number
  _userId: number
}

export class Post implements PostProps {
  _id!: string
  _title!: string
  _body!: string
  _tags!: string[]
  _reactions!: { _likes: number; _dislikes: number }
  _views!: number
  _userId!: number

  constructor(props: PostProps) {
    Object.assign(this, props)
  }

  get id(): string {
    return this._id
  }
  get title(): string {
    return this._title
  }
  get body(): string {
    return this._body
  }
  get tags(): string[] {
    return [...this._tags]
  }
  get reactions(): { _likes: number; _dislikes: number } {
    return { ...this._reactions }
  }
  get views(): number {
    return this._views
  }
  get userId(): number {
    return this._userId
  }
}
