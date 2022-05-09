import React , { useState} from 'react'
import './Temprature.css'
function Temprature() {
  const [temp, setTemp] = useState(0);
  var checkColor = ''
  if(temp === 0 && temp <10){
    checkColor = "#26306f"
  }else if(temp >= 10 && temp <= 15){
    checkColor = '#05b31f'

  }else if(temp >= 16 && temp <= 21){
    checkColor = '#eaf02b'

  }else if(temp > 21 && temp <= 25){
    checkColor = '#f58802'

  }else if(temp > 25){
    checkColor = '#b30505'

  }
  function handelClick(e) {
    var name = e.target.name
    if(name === 'plus'){
      setTemp((p)=> p + 1)
    }else if(name === 'minus'){
      setTemp((p)=> p - 1)
    }
  }
  return (
    <div className='temp-container'>
      <div className="cotainer">
        <div className="temp" style={{background: checkColor}}> {temp}°C </div>
        <div className="btn">
          <button onClick={handelClick} name='minus'> - </button>
          <button onClick={handelClick} name='plus'> + </button>
        </div>

      </div>
    </div>
  )
}


export default Temprature