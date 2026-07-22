import Highbar from './components/home/Highbar'
import Card from './components/home/Card'
import { createBox } from './ts/vocapc'
import { getProfile } from './ts/vocapc'
import { useEffect, useState } from 'react'
import { Profile } from './ts/types/profile'

type Homeprops = {
  profile: Profile
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
}

function Home({ profile, setProfile }: Homeprops): React.JSX.Element {
  useEffect(() => {
    const load = async () => {
      const data = await getProfile()
      setProfile(data)
    }

    load()
  }, [])

  if (!profile) {
    return <div>loading..</div>
  }

  const box = createBox(profile)

  return (
    <>
      <div className="highbar">
        <Highbar></Highbar>
      </div>
      <div className="mainbox">
        <div className="cards">
          <Card box={box[0]} profile={profile} setProfile={setProfile} />
          <Card box={box[1]} profile={profile} setProfile={setProfile} />
        </div>
      </div>
      <div className="bottombar"></div>
    </>
  )
}

export default Home
