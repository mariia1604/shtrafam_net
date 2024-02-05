import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function Settings_now() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [my_info, setMyInfo] = useState([])

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/user_info/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    })
      .then(data => data.json())
      .then(data => setMyInfo(data))
  }, [])

  return (
    <>

          {
            my_info.map(el =>
              
              <div className="my_request">
                <a className="date_my_request">Текущее имя пользователя: {el.name}</a>
                <a className="status_my_request">Текущий email: {el.email}</a>
              </div>

            
            )
          }
      
    </>
  )
}

export default Settings_now
