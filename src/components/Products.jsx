import {Link } from 'react-router-dom'

function Products() {
  return (
    <div>
        <h1>Hello from product <Link to ="/" className='underline'>go to Dashboard</Link></h1>
    </div>
  )
}

export default Products