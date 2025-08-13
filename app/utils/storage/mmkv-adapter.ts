import { PersistStorage } from "zustand/middleware"

import { storage } from "./index"

/**
 * MMKV adapter for Zustand persist middleware
 * Zustand의 persist 미들웨어에서 사용할 수 있도록 MMKV를 PersistStorage 인터페이스에 맞게 래핑
 */
export const mmkvStorage: PersistStorage<any> = {
  getItem: (name: string) => {
    try {
      const value = storage.getString(name)
      return value ? JSON.parse(value) : null
    } catch (error) {
      console.warn(`Failed to get item from MMKV: ${name}`, error)
      return null
    }
  },
  setItem: (name: string, value: any): void => {
    try {
      storage.set(name, JSON.stringify(value))
    } catch (error) {
      console.warn(`Failed to set item to MMKV: ${name}`, error)
    }
  },
  removeItem: (name: string): void => {
    try {
      storage.delete(name)
    } catch (error) {
      console.warn(`Failed to remove item from MMKV: ${name}`, error)
    }
  },
}
