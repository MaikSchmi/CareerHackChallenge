import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="center-text">
      <h1>Amazing Phones</h1>
      <p>Would you like to browse phones?</p>
      <Link to="/phones">Browse Phones</Link>
    </div>
  )
}

export default Home
