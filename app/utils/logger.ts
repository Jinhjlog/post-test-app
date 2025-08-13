/**
 * Logger utility for development logging with Reactotron
 *
 * Usage:
 * - logger.info("API_SUCCESS", "사용자 로드 완료", userData)
 * - logger.error("API_ERROR", "API 호출 실패", error)
 * - logger.warn("VALIDATION_WARNING", "데이터 검증 경고", validationResult)
 * - logger.debug("DEBUG_INFO", "디버그 정보", debugData)
 */

interface LogData {
  [key: string]: any
}

interface DisplayOptions {
  name: string
  preview: string
  value?: LogData
  important?: boolean
}

class Logger {
  /**
   * 일반 정보 로그 (파란색)
   */
  info(name: string, preview: string, data?: LogData): void {
    if (__DEV__) {
      console.tron.display({
        name: `ℹ️ ${name}`,
        preview,
        value: data,
        important: false,
      })
    }
  }

  /**
   * 에러 로그 (빨간색, 중요 표시)
   */
  error(name: string, preview: string, error: any, additionalData?: LogData): void {
    if (__DEV__) {
      const errorData: LogData = {
        message: error?.message || error,
        stack: error?.stack,
        status: error?.status,
        timestamp: new Date().toISOString(),
        ...additionalData,
      }

      console.tron.display({
        name: `❌ ${name}`,
        preview,
        value: errorData,
        important: true,
      })
    }
  }

  /**
   * 경고 로그 (노란색, 중요 표시)
   */
  warn(name: string, preview: string, data?: LogData): void {
    if (__DEV__) {
      console.tron.display({
        name: `⚠️ ${name}`,
        preview,
        value: {
          timestamp: new Date().toISOString(),
          ...data,
        },
        important: true,
      })
    }
  }

  /**
   * 성공 로그 (초록색)
   */
  success(name: string, preview: string, data?: LogData): void {
    if (__DEV__) {
      console.tron.display({
        name: `✅ ${name}`,
        preview,
        value: data,
        important: false,
      })
    }
  }

  /**
   * 디버그 로그 (회색)
   */
  debug(name: string, preview: string, data?: LogData): void {
    if (__DEV__) {
      console.tron.display({
        name: `🔍 ${name}`,
        preview,
        value: data,
        important: false,
      })
    }
  }

  /**
   * API 호출 시작 로그
   */
  apiStart(method: string, endpoint: string, data?: any): void {
    if (__DEV__) {
      console.tron.display({
        name: `📤 API_${method.toUpperCase()}_START`,
        preview: `${method.toUpperCase()} ${endpoint}`,
        value: {
          method,
          endpoint,
          requestData: data,
          timestamp: new Date().toISOString(),
        },
      })
    }
  }

  /**
   * API 호출 성공 로그
   */
  apiSuccess(method: string, endpoint: string, responseData?: any, duration?: number): void {
    if (__DEV__) {
      console.tron.display({
        name: `📥 API_${method.toUpperCase()}_SUCCESS`,
        preview: `${method.toUpperCase()} ${endpoint} 성공${duration ? ` (${duration}ms)` : ""}`,
        value: {
          method,
          endpoint,
          responseData,
          duration: duration ? `${duration}ms` : undefined,
          timestamp: new Date().toISOString(),
        },
      })
    }
  }

  /**
   * API 호출 실패 로그
   */
  apiError(method: string, endpoint: string, error: any, duration?: number): void {
    if (__DEV__) {
      console.tron.display({
        name: `💥 API_${method.toUpperCase()}_ERROR`,
        preview: `${method.toUpperCase()} ${endpoint} 실패`,
        value: {
          method,
          endpoint,
          error: error?.message || error,
          status: error?.status,
          duration: duration ? `${duration}ms` : undefined,
          timestamp: new Date().toISOString(),
        },
        important: true,
      })
    }
  }

  /**
   * Store 액션 로그
   */
  storeAction(storeName: string, actionName: string, payload?: any): void {
    if (__DEV__) {
      console.tron.display({
        name: `🏪 STORE_${storeName.toUpperCase()}_${actionName.toUpperCase()}`,
        preview: `${storeName}: ${actionName}`,
        value: {
          store: storeName,
          action: actionName,
          payload,
          timestamp: new Date().toISOString(),
        },
      })
    }
  }

  /**
   * 네비게이션 로그
   */
  navigation(action: string, screenName?: string, params?: any): void {
    if (__DEV__) {
      console.tron.display({
        name: `🧭 NAVIGATION_${action.toUpperCase()}`,
        preview: `${action}${screenName ? ` → ${screenName}` : ""}`,
        value: {
          action,
          screenName,
          params,
          timestamp: new Date().toISOString(),
        },
      })
    }
  }

  /**
   * 커스텀 로그 (완전 자유형식)
   */
  custom(options: DisplayOptions): void {
    if (__DEV__) {
      console.tron.display({
        name: options.name,
        preview: options.preview,
        value: {
          timestamp: new Date().toISOString(),
          ...options.value,
        },
        important: options.important ?? false,
      })
    }
  }

  /**
   * 간단한 텍스트 로그 (console.tron.log 래퍼)
   */
  log(...args: any[]): void {
    if (__DEV__) {
      console.tron.log(...args)
    }
  }
}

export const logger = new Logger()

// 타입 export
export type { LogData, DisplayOptions }
