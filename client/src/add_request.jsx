import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Add_request() {
  const [violation_date, setViolationDate] = useState('')
  const [violation_place, setViolationPlace] = useState('')
  const [car_number, setCarNumber] = useState('')
  const [imageValue, setImageValue] = useState('')
  const [image, setImage] = useState()

  const token = useSelector((state) => state.auth.token)


  async function add(violation_date1, violation_place1, car_number1, image1) {
    const data = new FormData();

    data.append('violation_date', violation_date)
    data.append('violation_place', violation_place)
    data.append('car_number', car_number)
    data.append('image', image[0])
    // const data = {
    //   'violation_date': violation_date,
    //   'violation_place': violation_place,
    //   'car_number': car_number,
    //   'image': image
    // }
    console.log(data)
    console.log(image)
    await fetch("http://localhost:3000/add/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: data
    });
    setViolationDate('')
    setViolationPlace('')
    setCarNumber('')
    setImage()
    setImageValue('')

  }

  return (
    <>

      <div className="main">

        <h1>Заявка</h1>

        <form encType='multipart/form-data' onSubmit={(e) => {
          e.preventDefault()
          console.log("asjdsadjiasdj")
          add(violation_date, violation_place, car_number, image)

        }}>
          <div className='div_form'>
            <input type="date" id="date" name="date" placeholder="Дата нарушения..." value={violation_date} onChange={(e) => {
              setViolationDate(e.target.value)
            }} required />
            <input type="text" id="place" name="place" placeholder="Место нарушения..." value={violation_place} onChange={(e) => {
              setViolationPlace(e.target.value)
            }} required />
            <input type="text" id="car_number" name="car_number" placeholder="Номер автомобиля..." value={car_number} onChange={(e) => {
              setCarNumber(e.target.value)
            }} required />
            <input type="file" id="car_number" name="image" placeholder="Выберите файл..." value={imageValue} onChange={(e) => {
              setImageValue(e.target.value)
              setImage(e.target.files)
            }} required />
          </div>
          <div>
            <input type="submit" value="отправить" />
          </div>
          <Link to={'/'}> <a className="footer_a"><a>На главную</a></a></Link>
        </form>

      </div>

    </>
  )
}

export default Add_request
