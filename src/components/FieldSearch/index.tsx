// import { useHistory } from 'contexts/history'
import { useState, useEffect, useRef } from 'react'
import { useDebounce, EventType } from '../../hooks/useDebounce'
import * as S from './styles'
import React from 'react'

export type FieldSearchTypes = {
  onSearch?: (search: string | number) => void
  clear?: string
  loading?: (isLoading: boolean) => void
  saverName?: string
}

const FieldSearch = ({
  onSearch,
  clear = '',
  loading,
  saverName
}: FieldSearchTypes) => {
  const ref: any = useRef(null)
  const { keyUp, debounceIsWaiting } = useDebounce()

  const [value, setValue] = useState<string | undefined>('')
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    ref.current.focus()
    setFocus(true)
  }

  useEffect(() => {
    if (saverName) {
      const storageKeys = localStorage.getItem(`${saverName}_params`)

      if (storageKeys) {
        const keys = JSON.parse(storageKeys)

        handleFocus()
        setValue(keys.search)
      }
    }
  }, [saverName])

  useEffect(() => {
    loading && loading(debounceIsWaiting)
  }, [debounceIsWaiting, loading])

  useEffect(() => {
    if (clear !== '') {
      setValue(undefined)
    }
  }, [clear])

  const handleBlur = () => {
    setFocus(false)
  }

  return (
    <S.Wrapper onClick={handleFocus}>
      <S.Input
        ref={ref}
        onBlur={handleBlur}
        onKeyUp={(event: EventType) => {
          keyUp(
            event,
            (value: string | number) => {
              onSearch && onSearch(value)
            },
            1500
          )
        }}
        initial={{
          width: 0,
          paddingLeft: '0'
        }}
        animate={{
          width: !!value || focus ? 220 : 0,
          paddingLeft: !!value || focus ? '5' : '0'
        }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
        value={value}
        defaultValue={value}
        onChange={(event: any) => setValue(event.target.value)}
        data-testid="vl-fld-search-general"
        placeholder="Pesquisar..."
      />

      <S.SearchIcon isFocused={!!value || focus} />
    </S.Wrapper>
  )
}

export {FieldSearch}
