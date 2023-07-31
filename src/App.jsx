import { useEffect, useState } from 'react';

const App = () => {
  const [jokeList, setJokeList] = useState([]);

  useEffect(() => {
    const getJoke = async() => {
      const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
      const data = await response.json();

      const joke = {
        id: data.id,
        category: data.category,
        joke: data.joke
      }

      setJokeList([...jokeList, joke])
    }
    getJoke();
  }, [])

  const addJoke = async() => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
      const data = await response.json();

      const joke = {
        id: data.id,
        category: data.category,
        joke: data.joke
      }

      setJokeList([...jokeList, joke])
  }

  return (
    <>
      <h1>React Jokes</h1>
      
      <ul>
      {
        jokeList.map((singleJoke) => {
          console.log(singleJoke);
          return <li key={singleJoke.id}>
            <h2>Category: {singleJoke.category}</h2>
            <p>{singleJoke.joke}</p>
          </li>
        })
      }
      </ul>

      <button onClick={addJoke}>Add Joke</button>
    </>
  )
}

export default App
