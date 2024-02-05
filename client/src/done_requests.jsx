import { useState } from 'react'
import './App.css'
import Done_request from './done_request'
import { Link } from 'react-router-dom'

function Done_requests() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="main">

      <h1>Обработанные заявки</h1>

      <form action="/users/register" method="GET">
        <div className='div_form'>
          <Done_request />
        </div>
        <Link to={'/'}> <a className="footer_a"><a>На главную</a></a></Link>
      </form>

    </div>
      
    </>
  )
}

export default Done_requests
