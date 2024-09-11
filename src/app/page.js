import React from 'react'
import Navbar from './component/navbar/Navbar'
import InputForm from './component/InputForm/InputForm'
import Fullinput from './component/fullinput/Fullinput'
import LoginSingup from './LoginSingup/page'
import Login from './Login/page'
import TodoList from '@/app/component/Todo-List/page'
import SimpleCalculator from '@/app/component/SimpleCalculator/page'

const page = () => {
  return (
    <div>
      <Navbar/>
      <InputForm/>
      <Fullinput/>
      <LoginSingup/>
      <Login/>
      <TodoList/>
      <SimpleCalculator/>
    </div>
  )
}

export default page