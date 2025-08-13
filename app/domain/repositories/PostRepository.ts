import { Post } from "../models"

export abstract class PostRepository {
  abstract getPosts(): Promise<Post[]>
}
