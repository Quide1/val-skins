import {   useParams } from 'react-router-dom'

function TestPageWithParam() {
    const { weapon } = useParams()

  return (
    <div>
      <h1>
        hola{weapon}
      </h1>
    </div>
  )
}

export default TestPageWithParam
