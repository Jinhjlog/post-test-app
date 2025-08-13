import "reflect-metadata"
import { container } from "tsyringe"

import { PostRepositoryImpl } from "@infrastructure/repositories/PostRepositoryImpl"

import { POST_REPOSITORY } from "./tokens"

// 토큰 등록
container.register(POST_REPOSITORY, { useClass: PostRepositoryImpl })

export { container }
