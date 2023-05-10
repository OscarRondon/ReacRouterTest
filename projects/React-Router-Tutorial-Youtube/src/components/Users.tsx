import { Outlet, useSearchParams } from 'react-router-dom'

export function Users () {
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.values())
  // console.log(searchParams.getAll('filter'))
  return (
    <>
    <div>
      <button type='button' onClick={() => { setSearchParams({ filter: 'active' }) }}>Active users</button>
      <button type='button' onClick={() => { setSearchParams({ }) }}>Reset filters</button>
    </div>
    {
      searchParams.get('filter') === 'active' ? <h3>Showing active users</h3> : <h3>Showing all users</h3>
    }
    <div>
      <h1>Users Component!!!</h1>
      <h2>Showing all users</h2>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
    </div>
    <Outlet />
    </>
  )
}
