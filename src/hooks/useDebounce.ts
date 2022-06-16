import { useState, useCallback } from 'react'

export type EventType = React.KeyboardEvent<HTMLInputElement>

type DebouceType = {
  keyUp: (
    event: EventType,
    callback: (value: string | number) => void,
    delay?: number
  ) => void
  debounce: (callback: (value: string | number) => void, delay?: number) => void
  keyUpString: (
    event: string,
    callback: (value: string) => void,
    delay?: number
  ) => void
  debounceIsWaiting: boolean
}

let timeout: ReturnType<typeof setTimeout>

export function useDebounce(): DebouceType {
  const [debounceIsWaiting, setDebouceIsWating] = useState(false)

  const keyUp = useCallback(
    async (
      event: EventType,
      callback: (value: string | number) => void,
      delay = 1500
    ) => {
      const target = event.target as HTMLTextAreaElement
      const { value } = target

      callback(
        await new Promise<string | number>((resolve) => {
          clearTimeout(timeout)
          setDebouceIsWating(true)

          timeout = setTimeout(() => {
            setDebouceIsWating(false)
            resolve(value)
          }, delay)
        })
      )
    },
    []
  )

  const keyUpString = useCallback(
    async (value: string, callback: (value: string) => void, delay = 1500) => {
      callback(
        await new Promise<string>((resolve) => {
          clearTimeout(timeout)
          setDebouceIsWating(true)

          timeout = setTimeout(() => {
            setDebouceIsWating(false)
            resolve(value)
          }, delay)
        })
      )
    },
    []
  )

  const debounce = useCallback(
    async (callback: (value: string | number) => void, delay = 1500) => {
      callback(
        await new Promise<string | number>((resolve) => {
          clearTimeout(timeout)
          setDebouceIsWating(true)

          timeout = setTimeout(() => {
            setDebouceIsWating(false)
            resolve('debounce')
          }, delay)
        })
      )
    },
    []
  )

  return {
    keyUp,
    keyUpString,
    debounce,
    debounceIsWaiting
  }
}
