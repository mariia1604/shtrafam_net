import { useState } from 'react'
import './App.css'

function Accept(props) {
  const [status, setStatus] = useState('')

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
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("asjdsadjiasdj")
        add(status)

      }}>
        <div>
          <input type="submit" id='accept' value="Принять" />
        </div>
      </form>

    </>
  )
}

export default Accept