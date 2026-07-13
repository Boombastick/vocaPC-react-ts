type Box = {
  contents: string
  color: string
  goal: number
  temp: string
}

const box: Box[] = [
  { contents: '어휘학습', color: '#9A7EE5', goal: 0, temp: '오늘의 어휘' },
  { contents: '단순암기', color: '#D377CA', goal: 0, temp: '오늘의 단어' }
]
export const getBox = () => {
  return box
}
