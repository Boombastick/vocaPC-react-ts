function Card({ box }) {
  console.log(box)
  return (
    <div className="card">
      <p className="cardName">{box.contents}</p>
      <p className="cardGoal">하루 목표 {box.goal}개</p>
      <div className="cardBtn" style={{ backgroundColor: box.color }}>
        {box.temp}
      </div>
    </div>
  )
}

export default Card
