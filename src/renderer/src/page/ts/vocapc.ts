import { Profile } from './types/profile'
import { Box } from './types/box'

export const createBox = (profile: Profile) => {
  const box: Box[] = [
    {
      contents: '어휘학습',
      color: '#9A7EE5',
      goal: profile.daily_voca_goal,
      temp: '오늘의 어휘',
      path: '/training'
    },
    {
      contents: '단순암기',
      color: '#D377CA',
      goal: profile.daily_word_goal,
      temp: '오늘의 단어',
      path: '/word'
    }
  ]
  return box
}

export const getProfile = async () => {
  const response = await fetch('http://127.0.0.1:3000/getProfile?user_id=0')
  const profile = await response.json()
  console.log(profile)

  return profile
}

export const getQuestion = async (current_voca_id: number) => {
  const response = await fetch(
    'http://127.0.0.1:3000/getQuestion?current_voca_id=' + current_voca_id
  )
  const question = response.json()
  console.log(question)

  return question
}
