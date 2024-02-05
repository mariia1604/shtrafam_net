import { useState } from 'react'
import './App.css'
import My_request from './my_request'
import { Link } from 'react-router-dom'

function My_requests() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="main">

      <h1>Мои заявки</h1>

      <form action="/users/register" method="GET">
        <div className='div_form'>
          <My_request />
        </div>
        <Link to={'/'}> <a className="footer_a"><a>На главную</a></a></Link>
      </form>

    </div>
      
    </>
  )
}

export default My_requests
