import Highbar from './components/home/Highbar'
import Card from './components/home/Card'
import { getBox } from './ts/vocapc'
import { getProfile } from './ts/vocapc'
import { useEffect, useState } from 'react'

function Home(): React.JSX.Element {
  const [profile, setProfile] = useState(null)

  const box = getBox()

  useEffect(() => {
    const load = async () => {
      const data = await getProfile()
      setProfile(data)

      load()
    }
  })

  return (
    <>
      <div className="highbar">
        <Highbar></Highbar>
      </div>
      <div className="mainbox">
        <div className="cards">
          <Card box={box[0]} />
          <Card box={box[1]} />
        </div>
      </div>
      <div className="bottombar"></div>
    </>
  )
}

export default Home
