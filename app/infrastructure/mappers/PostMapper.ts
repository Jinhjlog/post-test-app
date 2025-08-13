import { Post } from "@/domain/models"

import { PostApiData } from "../api"

export class PostMapper {
  static toDomain(dto: PostApiData): Post {
    return new Post({
      _id: dto.id,
      _title: dto.title,
      _body: dto.body,
      _tags: dto.tags,
      _reactions: {
        _likes: dto.reactions.likes,
        _dislikes: dto.reactions.dislikes,
      },
      _views: dto.views,
      _userId: dto.userId,
    })
  }

  static toDomainList(dtos: PostApiData[]): Post[] {
    return dtos.map(this.toDomain)
  }
}
