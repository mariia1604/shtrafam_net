import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MainPage = () => {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)

    return (
        <>

            {
                role === "ADMIN" ? 
                <div className='main'>
                    <h1>Личный кабинет администратора</h1>
                    <div className="main_profile">
                        <Link to={'/done_requests'}><a>Обработанные заявки</a></Link>
                        <Link to={'/undone_requests'}><a>Необработанные заявки</a></Link>
                        <Link to={'/edit_admin'}><a>Мои данные</a></Link>
                    </div>
                    <button onClick={() => {
                        dispatch(logOut())
                    }}>выйти</button>
                </div>
                 : 
                <div className='main'>
                    <h1>Личный кабинет пользователя</h1>
                    <div className="main_profile">
                        <Link to={'/add_request'}><a>Добавить заявку</a></Link>
                        <Link to={'/my_requests'}><a>Мои заявки</a></Link>
                        <Link to={'/edit_user'}><a>Мои данные</a></Link>
                    </div>
                    <button onClick={() => {
                        dispatch(logOut())
                    }}>выйти</button>
                </div>
            }
            
        </>
    )
}

export default MainPage