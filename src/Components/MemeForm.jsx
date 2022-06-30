import React from 'react'

const MemeForm = () => {
  return (
    <div className="form-container">
      <form action="form">
        <input type="text" placeholder="Shut Up"/>
        <input type="text" placeholder="and take my money" />
        <button className="btn" type="submit">Get a new meme image 🖼</button>
      </form>
    </div>
  )
}

export default MemeForm