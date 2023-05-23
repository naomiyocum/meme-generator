// import memesData from '../memesData.js'
import {useState} from 'react'

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages, setAllMemeImages] = useState("")

  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data))

  function getMemeImage() {
    const memesArr = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memesArr[randomNumber].url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="meme--form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}