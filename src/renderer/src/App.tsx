import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './page/Home'
import Training from './page/Training'

function App(): React.JSX.Element {
  const [profile, setProfile] = useState()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home profile={profile} setProfile={setProfile} />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
