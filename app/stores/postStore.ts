import { container } from "tsyringe"
import { create } from "zustand"

import { Post } from "@/domain/models"
import { PostRepository } from "@/domain/repositories"
import { POST_REPOSITORY } from "@/infrastructure/di"

interface PostState {
  // State
  posts: Record<string, Post>
  currentPostId?: string
  loading: boolean
  error?: string

  // Computed (Getter 역할)
  getCurrentPost: () => Post | undefined

  // Actions (Repository를 통해 API 호출)
  // fetchPost: (id: string) => Promise<void>
  fetchPosts: () => Promise<void>

  // Local Actions (API 호출 없음)
  setCurrentPost: (id: string) => void
  clearError: () => void
  reset: () => void
}

export const usePostStore = create<PostState>((set, get) => ({
  // Initial state
  posts: {},
  currentPostId: undefined,
  loading: false,
  error: undefined,

  getCurrentPost: () => {
    const { posts, currentPostId } = get()
    return currentPostId ? posts[currentPostId] : undefined
  },

  fetchPosts: async () => {
    set({ loading: true, error: undefined })
    try {
      const postRepository = container.resolve<PostRepository>(POST_REPOSITORY)

      const posts = await postRepository.getPosts()

      if (posts.length > 0) {
        const postsMap = posts.reduce<Record<string, Post>>((acc, post) => {
          acc[post.id] = post
          return acc
        }, {})

        set({ posts: postsMap, loading: false })
      }
    } catch (error) {
      // TODO: API 호출 시 에러가 발생했을 때 사용하는 에러 클래스가 필요함 (구현 할 것)
      if (error instanceof Error) {
        set({ error: error.message })
        return
      }

      set({ error: "알 수 없는 오류가 발생했습니다." })
      return
    } finally {
      set({ loading: false })
    }
  },

  setCurrentPost: (id: string) => {
    set({ currentPostId: id })
  },

  clearError: () => {
    set({ error: undefined })
  },

  reset: () =>
    set({
      posts: {},
      currentPostId: undefined,
      loading: false,
      error: undefined,
    }),
}))
