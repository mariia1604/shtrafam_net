import { useState } from 'react'
import './App.css'

function NotAccept(props) {
  const [status, setStatus] = useState('')

  async function add(status) {
    const data = {
      'status': 'Принята',
      id: props.id
    }
    await fetch("http://localhost:3000/not_accept/", {
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
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("asjdsadjiasdj")
        add(status)

      }}>
        <div>
          <input type="submit" id='not_accept' value="Отклонить" />
        </div>
      </form>

    </>
  )
}

export default NotAccept