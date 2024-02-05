import { useEffect, useState } from 'react'
import './App.css'

function Done_request() {
  const [date_of_appeal, setDateOfAppeal] = useState('')
  const [status, setStatus] = useState('')

  const [my_requests, setMyRequests] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/done_requests/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(data => data.json())
      .then(data => setMyRequests(data))
  }, [])

  return (
    <>

    {
        my_requests.map(el =>
          
          <div className="my_request">
            <a className="date_my_request">Заявка от {el.date_of_appeal}</a>
            <a className="status_request">Статус: {el.status}</a>
          </div>

         
        )
      }
      
    </>
  )
}

export default Done_request
