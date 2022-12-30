import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'

export function ChatList({ onAddChat }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))
    // onAddChat({
    //   id: nanoid(),
    //   name: value
    // })
  }

  // console.log('chats', chats)

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
          </li>
        ))}
      </ul>

      <h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Create Chat</button>
      </form>
    </>
  )
}