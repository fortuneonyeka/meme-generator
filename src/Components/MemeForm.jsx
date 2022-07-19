import React,{useState} from 'react'
import MemesData from "../MemesData"

const MemeForm = () => {
    // const initialMeme = "http://i.imgflip.com/1bij.jpg"
//   const [meme, setMeme] = useState(initialMeme)

const [meme, setMeme] = useState({
    topText : "", 
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = useState(MemesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomMemes = Math.floor(Math.random() * memesArray.length)  
    const url = memesArray[randomMemes].url
setMeme((preveMem) => ({
    ...preveMem,
    randomImage : url
}))
 
  
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
     <img className="meme-image" src={meme.randomImage} alt="" />
 </main>
     
  )
}

export default MemeForm