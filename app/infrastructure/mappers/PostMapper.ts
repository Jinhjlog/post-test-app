import { Post } from "@/domain/models"

import { PostApiResponse } from "../api"

export class PostMapper {
  static toDomain(dto: PostApiResponse): Post {
    return new Post({
      id: dto.id,
      title: dto.title,
      body: dto.body,
      tags: dto.tags,
      reactions: {
        likes: dto.reactions.likes,
        dislikes: dto.reactions.dislikes,
      },
      views: dto.views,
      userId: dto.userId,
    })
  }

  static toDomainList(dtos: PostApiResponse[]): Post[] {
    return dtos.map(this.toDomain)
  }
}
