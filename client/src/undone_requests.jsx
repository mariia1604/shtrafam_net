import { useState } from 'react'
import Undone_request from './undone_request'
import { Link } from 'react-router-dom'
import './App.css'

function Undone_requests() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="main">

      <h1>Необработанные заявки</h1>

      <form action="/users/register" method="GET">
        <div className='div_form'>
          <Undone_request />
        </div>
        <Link to={'/'}> <a className="footer_a"><a>На главную</a></a></Link>
      </form>

    </div>
      
    </>
  )
}

export default Undone_requests
