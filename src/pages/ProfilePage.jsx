import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../store/profile/types'
import { changeName, changeVisible } from '../store/profile/actions'

export function ProfilePage() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const name = useSelector((store) => store.name)
  const visible = useSelector((store) => store.visible)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const hendleChange = () => {
    console.log(value)
    dispatch(changeName(value))
    setValue('')
  }

  return (
    <>
      <h1>Profile Page</h1>
      <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <hr />
      <h2>{name}</h2>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(changeVisible())}>Change visible</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </>
  )
}