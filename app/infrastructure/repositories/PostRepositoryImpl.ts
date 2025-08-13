import { Post } from "@/domain/models"
import { PostRepository } from "@/domain/repositories"
import { logger } from "@/utils/logger"

import { apiClient, getGeneralApiProblem, PostApiResponse } from "../api"
import { PostMapper } from "../mappers"

const GET_POSTS = "/posts"

export class PostRepositoryImpl implements PostRepository {
  async getPosts(): Promise<Post[]> {
    const response = await apiClient.apisauce.get<PostApiResponse>(GET_POSTS, { limit: 10 })

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      logger.apiError("GET", GET_POSTS, problem)
      return []
    }

    try {
      const rawDatas = response.data?.posts ?? []
      return PostMapper.toDomainList(rawDatas)
    } catch (error) {
      logger.apiError("GET", GET_POSTS, error)
      return []
    }
  }
}
