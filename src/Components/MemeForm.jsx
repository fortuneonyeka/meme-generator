import React from 'react'

const MemeForm = () => {
  return (
    <main className="form-container">
      <form action="form">
        <input type="text" placeholder="Top Text"/>
        <input type="text" placeholder="Bottom Text" />
        <button className="btn" type="submit">Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

export default MemeForm