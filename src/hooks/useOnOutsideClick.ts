import { RefObject, useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      const closeIcon = String(
        (event.target as Element).parentElement?.parentElement?.className
      )

      const isIcon =
        closeIcon.indexOf('close') !== -1 || closeIcon.indexOf('clear') !== -1

      const target = String((event.target as Element).className)

      const classesNames = [
        'picker',
        'NoContentFound',
        'ant-select',
        'ant-tag',
        'vl-cogs-btn-import'
      ]

      let hasClassName = false

      classesNames.forEach((className) => {
        if (target.indexOf(className) !== -1) {
          hasClassName = true
        }
      })

      if (!el || el.contains(event.target as Node) || hasClassName || isIcon) {
        return
      }

      handler()
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }

    // Reload only if ref or handler changes
  }, [ref, handler])
}

export default useOnClickOutside
