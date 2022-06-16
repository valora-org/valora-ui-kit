export type StyleBusSlider = {
  color: string
  fontWeight: number
  fontSize: number
}

export const style: StyleBusSlider = {
  color: '#87869A',
  fontWeight: 300,
  fontSize: 12
}

type SliderLabel = {
  label: number
}

export const SliderLabel = ({ label }: SliderLabel) => {
  return <span>{label === 0 ? 'Seu ônibus' : `${label}h`}</span>
}
