import { useNavigate } from 'react-router'

function Card({ box, profile, setProfile }) {
  console.log(box)
  let navigate = useNavigate()
  return (
    <div className="card">
      <p className="cardName">{box.contents}</p>
      <p className="cardGoal">하루 목표 {box.goal}개</p>
      <div
        className="cardBtn"
        style={{ backgroundColor: box.color }}
        onClick={() => navigate(box.path)}
      >
        {box.temp}
      </div>
    </div>
  )
}

export default Card
