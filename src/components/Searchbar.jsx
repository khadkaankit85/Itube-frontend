import './searchbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Searchbar = () => {
  const [value, setvalue] = useState("")
  return (
    <div>
      <div className="search">
        <input className='input-bar' value={value} placeholder='Search' type="text" onChange={(e) => {
          setvalue(e.target.value)
        }} />
        <div className='link'>

          <Link to={`/watch/${value}`} className="searchButton" >
            <div className="searchButton">
              <img src="src/images/search.svg" alt="" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Searchbar
