import memesData from '../memesData.js'
import {useState} from 'react'

export default function Meme() {
  const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg')

  function getMemeImage() {
    const memesArr = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    setMemeImage(memesArr[randomNumber].url)
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
      <img src={memeImage} className="meme--image" alt="Random Meme"/>
    </main>
  )
}