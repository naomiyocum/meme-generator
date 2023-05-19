export default function Header() {
  return (
    <header>
      <img className="header--image" src={require("../images/troll-face.png")} alt="troll face" />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--project">React Course - Project 3</p>
    </header>
  )
}