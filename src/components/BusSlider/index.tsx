import React, { useState, useEffect, useCallback } from 'react'
import { Slider } from 'antd'
import { style, StyleBusSlider, SliderLabel } from './helper'
import * as S from './styles'

export type BusSliderTypes = {
  title?: string
  labelBefore?: string
  labelAfter?: string
  /** valor inicial - usado para edição */
  defaultValues?: [number, number]
  /** intervalo de tempo */
  interval?: [number, number]
  /** intercalar os textos das horas, exemplo: -3h - -2h - 1 */
  intercalary?: boolean
  /** on change for controller from react-hook-form */
  onChange?: (values: [number, number]) => void
  /** on change for any functions  */
  onInput?: (values: [number, number]) => void
}

type SliderType = [number, number] | undefined

type MarksObj = {
  [key: number]: {
    style: StyleBusSlider
    label: React.ReactNode
  }
}

const BusSlider = ({
  title = 'Defina o intervalo de tempo a ser monitorado em relação a sua saída',
  labelBefore = 'Antes',
  labelAfter = 'Depois',
  onChange,
  interval = [-7, 7],
  intercalary = false,
  defaultValues,
  onInput
}: BusSliderTypes) => {
  const [arrayOfKeysSize, setArrayOfKeysSizes] = useState<number[]>([])
  const [arrayOfInterval, setArrayOfInterval] = useState<number[]>([])
  const [values, setValues] = useState<SliderType>([33.3, 66.7])

  const [marks] = useState(() => {
    const firstNumber = interval[0]
    const secondNumber = interval[1]
    const intervalArray = []

    /** verificando se o valor é par ou impar */
    const isEven = secondNumber % 2 === 0

    /** gerar um array do intervalo de horas */
    for (let i = firstNumber; i <= secondNumber; i++) {
      intervalArray.push(i)
    }

    setArrayOfInterval(intervalArray)

    /** calculo da distância que cada item terá */
    const unitSize = 100 / (intervalArray.length - 1)

    let sizeSum = 0
    const marksObj: MarksObj = {}
    const keyArray: number[] = []

    /** inserindo o objeto com as informações de cada valor */
    for (let k = 0; k < intervalArray.length; k++) {
      const value = intervalArray[k]

      /** limitando em 100 o tamanho da chave */
      const keySize = k + 1 === intervalArray.length ? 100 : sizeSum

      keyArray.push(keySize)

      /**
       * Lógica:
       * prioridades:
       *  - O zero, pois ele mostrará a palavra "Seu ônibus", independente de
       * intercalação
       *  - As extremidades, o horário dos extremos tem que aparecer, então
       * através do valor do extremo, podemos saber se a intercalação será par
       * ou impar.
       */
      Object.assign(marksObj, {
        [keySize]: {
          label:
            value === 0 ? (
              <SliderLabel label={value} />
            ) : intercalary ? (
              /** calcular sempre com positivo */
              (value < 0 ? value * -1 : value) % 2 === (isEven ? 0 : 1) ? (
                <SliderLabel label={value} />
              ) : (
                <span />
              )
            ) : (
              <SliderLabel label={value} />
            ),
          style: style
        }
      })

      sizeSum = Number((sizeSum + unitSize).toFixed(1))
    }

    setArrayOfKeysSizes(keyArray)

    return marksObj
  })

  const handleTransformValues = useCallback(
    (
      type: 'componentToSystem' | 'systemToComponent',
      [left, right]: [number, number]
    ): [number, number] => {
      const componentValues = arrayOfKeysSize
      const systemValues = arrayOfInterval

      if (type === 'componentToSystem') {
        const leftIndex = componentValues.findIndex((value) => value === left)
        const rightIndex = componentValues.findIndex((value) => value === right)

        return [systemValues[leftIndex], systemValues[rightIndex]]
      }

      const leftIndex = systemValues.findIndex((value) => value === left)
      const rightIndex = systemValues.findIndex((value) => value === right)

      return [componentValues[leftIndex], componentValues[rightIndex]]
    },
    [arrayOfInterval, arrayOfKeysSize]
  )

  useEffect(() => {
    if (defaultValues) {
      setValues(
        handleTransformValues('systemToComponent', [
          defaultValues[0],
          defaultValues[1]
        ])
      )
    } else {
      onChange && onChange([-1, 1])
    }
  }, [defaultValues, handleTransformValues, onChange])

  const handleValues = ([left, right]: [number, number]) => {
    let vRight = right
    let vLeft = left
    if (right < 50) {
      vRight = 50
    }

    if (left > 50) {
      vLeft = 50
    }

    setValues([vLeft, vRight])
    const values = handleTransformValues('componentToSystem', [vLeft, vRight])
    onChange && onChange(values)
    onInput && onInput(values)
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.SliderWrapper>
        <S.Label>{labelBefore}</S.Label>
        <S.Container>
          <Slider
            data-testid="vl-slider"
            range
            step={null}
            marks={marks}
            value={values}
            tooltipVisible={false}
            onChange={handleValues}
          />
        </S.Container>
        <S.Label>{labelAfter}</S.Label>
      </S.SliderWrapper>
    </S.Wrapper>
  )
}

export default BusSlider
