import {   useParams } from 'react-router-dom'

function TestPageWithParam() {
    const { weapon } = useParams()

  return (
    <div>
      <h1>
        hola {weapon}
      </h1>
      <p>Este parrafo tendria que hablar sobre la weapon</p>
    </div>
  )
}

export default TestPageWithParam
