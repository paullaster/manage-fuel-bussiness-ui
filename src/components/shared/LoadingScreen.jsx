import React from 'react'

const LoadingScreen = (message) => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>{ message }</p>
    </div>
  )
}

export default LoadingScreen