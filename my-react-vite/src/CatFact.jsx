import { useEffect, useState } from 'react'

function CatFact() {
  const [fact, setFact] = useState('Loading...')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact))
      .catch(() => setFact("Couldn't load a cat fact. Try again later!"))
  }, [])

  return <p style={{ maxWidth: '600px', margin: '0 auto' }}>{fact}</p>
}

export default CatFact
