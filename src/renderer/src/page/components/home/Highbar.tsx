import fire from '../../../img/free-icon-fire-488605.png'
import arrow from '../../../img/free-icon-arrow-6499755.png'

function Highbar(): React.JSX.Element {
  return (
    <>
      <div className="highBox">
        <div className="daily-check">
          <div className="imgWrap">
            <img src={fire} alt="fire" />
          </div>
          <div className="daily-check-right">
            <p className="daily-learn">연속 학습 0 일</p>
            <div className="arrow-imgWrap">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="daily-circles">
              <div className="circle">
                <p>월</p>
              </div>
              <div className="circle">
                <p>화</p>
              </div>
              <div className="circle">
                <p>수</p>
              </div>
              <div className="circle">
                <p>목</p>
              </div>
              <div className="circle">
                <p>금</p>
              </div>
              <div className="circle">
                <p>토</p>
              </div>
              <div className="circle">
                <p>일</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Highbar
