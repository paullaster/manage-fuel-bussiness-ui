import React from 'react'

const LoadingScreen = ({show, message}) => {
  return (
      <>
        {
          show ? (<div className="loading">
          <div className="spinner"></div>
          <p>{ message }</p>
        </div>) : ''
        }
      </>
  )
}

export default LoadingScreen