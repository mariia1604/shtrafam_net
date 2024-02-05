import { useEffect, useState } from 'react'
import './App.css'
import NotAccept from './notaccept'
import Accept from './accept'

function Undone_request() {
  const [date_of_appeal, setDateOfAppeal] = useState('')
  const [violation_date, setViolationDate] = useState('')
  const [violation_place, setViolationPlace] = useState('')
  const [car_number, setCarNumber] = useState('')
  const [imageValue, setImageValue] = useState('')
  const [image, setImage] = useState()
  const [status, setStatus] = useState('')

  const [my_requests, setMyRequests] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/undone_requests/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(data => setMyRequests(data))
  }, [])

  async function add(status) {
    const data = {
      'status': 'Принята',
      id: props.id
    }
    await fetch("http://localhost:3000/accept/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    setStatus('')

  }

  return (
    <>

    {
        my_requests.map(el =>
          
          <div className="my_request">
      <a className="date_my_request">Заявка от {el.date_of_appeal}</a>
      <a className="status_my_request">Дата нарушения: {el.violation_date}</a>
      <a className="status_my_request">Место нарушения: {el.violation_place}</a>
      <a className="status_my_request">Номер автомобиля: {el.car_number}</a>
      <img src={el.image} />
      <div className="status_request">
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("asjdsadjiasdj")
        add(status)

      }}>
        <div>
          <input type="submit" id='accept' value="Принять" />
        </div>
      </form>
        <NotAccept />
      </div>
    </div>

         
        )
      }

    
      
    </>
  )
}

export default Undone_request
