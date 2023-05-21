import memesData from '../memesData.js'
import {useState} from 'react'

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memesArr = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memesArr[randomNumber].url
    }))
  }

  return (
    <main>
      <div className="meme--form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="Random Meme"/>
    </main>
  )
}