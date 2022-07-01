import React,{useState} from 'react'
import MemesData from "../MemesData"

const MemeForm = () => {
  const [meme, setMeme] = useState("")

  function getMemeImage() {
    const memesArray = MemesData.data.memes
    const randomMemes = Math.floor(Math.random() * memesArray.length)  
setMeme( memesArray[randomMemes].url)
 
  
}

  return (
    <main>
     <div className="form-container">
         <input 
             type="text"
             placeholder="Top text"
             className="form--input"
         />
         <input 
             type="text"
             placeholder="Bottom text"
             className="form--input"
         />
         <button 
             className="btn"
             onClick={getMemeImage}
         >
             Get a new meme image 🖼
         </button>
     </div>
     <img className="meme-image" src={meme} alt="" />
 </main>
     
  )
}

export default MemeForm