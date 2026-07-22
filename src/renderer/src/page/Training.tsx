import { useEffect, useState } from 'react'
import { getProfile } from './ts/vocapc'

function Training(): React.JSX.Element {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const load = async () => {
      const data = await getProfile()
      setProfile(data)
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
