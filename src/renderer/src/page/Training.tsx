import { useEffect, useState } from 'react'
import { getProfile, getQuestion } from './ts/vocapc'
import { Profile } from './ts/types/profile'

type Trainingprops = {
  profile: Profile
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
}
function Training({ profile, setProfile }: Trainingprops): React.JSX.Element {
  useEffect(() => {
    const load = async () => {
      const question = await getQuestion(profile.current_voca_id)
    }

    load()
  }, [])

  console.log(profile)
  return (
    <div className="training-div">
      <div className="high-percentage">
        <div className="percentage-complete">
          <div className="percentage-current"></div>
        </div>
      </div>
      <div className="quest-box">
        <div className="ko-box">
          <p></p>
        </div>
        <div className="en-box">
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Training
