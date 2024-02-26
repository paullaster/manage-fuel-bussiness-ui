import React from 'react'

const LoadingScreen = (message = null) => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>{ message || "Loading..." }</p>
    </div>
  )
}

export default LoadingScreen