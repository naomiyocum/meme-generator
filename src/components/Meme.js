import memesData from '../memesData.js'

export default function Meme() {
  let url

  function getMemeImage() {
    const memesArr = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    url = memesArr[randomNumber].url
    console.log(url)
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
    </main>
  )
}