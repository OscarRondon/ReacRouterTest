import { useParams } from 'react-router-dom'

export function UserDetails () {
  const { userId } = useParams()
  return (
    <div>
      <hr />
      <h2>UserDetails Component!!!</h2>
      <p>Information about user with id: {userId}</p>
    </div>

  )

}
