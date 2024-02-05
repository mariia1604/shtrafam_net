import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function My_request() {
  const [date_of_appeal, setDateOfAppeal] = useState('')
  const [status, setStatus] = useState('')

  const [my_requests, setMyRequests] = useState([])

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/requests/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
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
            <a className="status_my_request">Статус: {el.status}</a>
          </div>

         
        )
      }


    </>
  )
}

export default My_request
