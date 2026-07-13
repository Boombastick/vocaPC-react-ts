import Highbar from './components/home/Highbar'
import Card from './components/home/Card'
import { getBox } from './ts/home'

function Home(): React.JSX.Element {
  const box = getBox()

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
