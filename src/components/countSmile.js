import React from 'react'
import { CountSmileys } from '../utils/countSmile'

export default function CountSmile({inputFace}) {
    const countSmile = CountSmileys(inputFace)
  return (
    <div>
        <h1>countSmile</h1>
        <dd>result = {countSmile}</dd>
    </div>
    
  )
}
