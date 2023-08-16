import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import './App.css';
import Spinner from './components/Spinner';

function App() {
  const [posts, setPosts] = useState([])
  const [isLoding, setIsLoding] = useState(false)

  useEffect(() => {
    setIsLoding(true)
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        if (response.ok) {
          setIsLoding(false)
          return response.json()
        }
      })
      .then(data => setPosts([...data]))
  }, [])

  return (
    <div className="App">
      {isLoding && <Spinner />}
      <Post data={posts} spinner={isLoding} />
    </div>
  );
}

export default App;