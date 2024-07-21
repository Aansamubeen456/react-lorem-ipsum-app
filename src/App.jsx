import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  let [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const [string, setString] = useState(data[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    // const newText = data.slice(0, count)
    setText(data.slice(0, count))
  }
  return (
    <section className="section-center">
      <h2>tired of boring lorem ipsum?</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">paragrapgh:</label>
        <input
          type="number"
          className="form-input"
          id="number"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        ></input>
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.length === 0 ? (
          <p>{string}</p>
        ) : (
          text.map((item) => {
            return <p key={nanoid()}>{item}</p>
          })
        )}
      </article>
    </section>
  )
}
export default App
